import {connect} from 'react-redux';
import actions from '../../shared/actions';
import EndpointComponent from '../components/endpoint';
import {replaceStringPlaceholders, reduceParamsToKeyValuePair, submitApiRequest, submitProxiedRequest} from '../../shared/helpers';
const mapStateToProps = (state, ownProps) => {
    return {
        apiType: state.apiType,
        sampleContentType: state.sampleContentType,
        endpoint: ownProps.endpoint,
        tagName: ownProps.tagName,
        userProfile: state.userProfile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAccessTokenExpiration: () => {
            dispatch(actions.accessTokenExpiration());
        },
        onFillConsoleSampleData: (endpointId) => {
            dispatch(actions.fillConsoleSampleData(endpointId));
        },
        onSubmitConsoleRequest: (endpoint, userProfile) => {
            /* If our endpoint has a defined proxy, use that to make our API console request
            * Otherwise, just use the path specified as `host` in Swagger file
            */
            // Api Reference has complex pathParam/queryString structure (example, fieldType, etc.)
            console.warn("CONSOLE REQUEST endpoint", endpoint)
            if (endpoint.consoleError) {
                console.warn("if (error) CONSOLE REQUEST")

                dispatch(actions.consoleError(endpoint.id));
            } else {
                console.warn("else CONSOLE REQUEST")

                // create either a proxied or normal API request
                let apiRequest;

                if (endpoint.proxy &&
                    !(userProfile && userProfile.toggled)) {
                    // Api Reference has complex pathParam/queryString structure (example, fieldType, etc.)
                    apiRequest = submitProxiedRequest.bind(null, {
                        proxy: endpoint.proxy,
                        action: endpoint.action,
                        path: endpoint.path,
                        queryString: reduceParamsToKeyValuePair(endpoint.queryString),
                        pathParams: reduceParamsToKeyValuePair(endpoint.pathParams),
                        postBody: endpoint.postBody || {}
                    });
                    // console.warn("CONSOLE REQUEST: IF, api request", apiRequest)
                    console.warn("CONSOLE REQUEST: IF, queryString", endpoint.queryString)
                    console.warn("CONSOLE REQUEST: IF, queryString reduced", reduceParamsToKeyValuePair(endpoint.queryString))
                    console.warn("CONSOLE REQUEST: IF, pathParams", endpoint.pathParams)
                    console.warn("CONSOLE REQUEST: IF, pathParams reduced", reduceParamsToKeyValuePair(endpoint.pathParams))

                } else {
                    const url = (endpoint.pathParams ? replaceStringPlaceholders(endpoint.path, reduceParamsToKeyValuePair(endpoint.pathParams)) : endpoint.path) + (endpoint.qsPath || '');
                    const postBody = endpoint.postBody || null;

                    apiRequest = submitApiRequest.bind(null, url, endpoint.action, postBody, userProfile);
                    console.warn("CONSOLE REQUEST: ELSE, api request", apiRequest)
                }
                // Show Animation here until promise or isLoading comes back or w/e
                dispatch(actions.consoleLoadingAnimation(endpoint.id));

                apiRequest()
                    .then((apiResponse) => {
                        console.warn("API REQUEST: dispatch")

                        dispatch(actions.submitConsoleRequest(endpoint.id, apiResponse.body, apiResponse.status, apiResponse.statusMessage));
                    })
                    .catch((err) => {
                        console.warn("API REQUEST: error")

                        dispatch(actions.submitConsoleRequest(endpoint.id, err, err.message, err.message));
                    });
            }
        },
        onPostBodyInputChanged: (endpointId, paramName, newValue) => {
            dispatch(actions.postBodyInputChanged(endpointId, paramName, newValue));
        },
        onRequestChanged: (endpointId, newValue) => {
            dispatch(actions.requestChanged(endpointId, newValue));
        },
        onResetConsole: (endpointId) => {
            dispatch(actions.resetConsole(endpointId));
        },
        onQueryParamChanged: (newValue, paramName, endpointId) => {
            dispatch(actions.queryParamChanged(newValue, paramName, endpointId));
        },
        onPathParamChanged: (newValue, paramName, endpointId) => {
            dispatch(actions.pathParamChanged(newValue, paramName, endpointId));
        },
        onAddItemToPostbodyCollection: (paramName, endpointId, itemSchema) => {
            dispatch(actions.addItemToPostbodyCollection(paramName, endpointId, itemSchema));
        },
        onRemovePostbodyCollectionItem: (paramName, endpointId) => {
            dispatch(actions.removePostbodyCollectionItem(paramName, endpointId));
        },
        onToggleAiForRequest: () => {
            dispatch(actions.toggleAiForRequest());
        },
        onToggleShowExcludedPostBodyProps: (endpointId) => {
            dispatch(actions.toggleShowExcludedPostBodyProps(endpointId));
        }
    };
};

const EndpointContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EndpointComponent);

export default EndpointContainer;
