--- 
title: graphql_apis
hide_title: false
hide_table_of_contents: false
keywords:
  - graphql_apis
  - appsync
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>graphql_apis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="graphql_apis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.graphql_apis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_graphql_api"
    values={[
        { label: 'get_graphql_api', value: 'get_graphql_api' },
        { label: 'list_graphql_apis', value: 'list_graphql_apis' }
    ]}
>
<TabItem value="get_graphql_api">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The API name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="additionalAuthenticationProviders" /></td>
    <td><code>array</code></td>
    <td>A list of additional authentication providers for the GraphqlApi API.</td>
</tr>
<tr>
    <td><CopyableCode code="apiId" /></td>
    <td><code>string</code></td>
    <td>The API ID.</td>
</tr>
<tr>
    <td><CopyableCode code="apiType" /></td>
    <td><code>string</code></td>
    <td>The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). (GRAPHQL, MERGED)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="authenticationType" /></td>
    <td><code>string</code></td>
    <td>The authentication type. (API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT, AWS_LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>object</code></td>
    <td>The DNS records for the API.</td>
</tr>
<tr>
    <td><CopyableCode code="enhancedMetricsConfig" /></td>
    <td><code>object</code></td>
    <td>Enables and controls the enhanced metrics feature. Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent. Enhanced metrics can be configured at the resolver, data source, and operation levels. EnhancedMetricsConfig contains three required parameters, each controlling one of these categories: resolverLevelMetricsBehavior: Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include: GraphQL errors: The number of GraphQL errors that occurred. Requests: The number of invocations that occurred during a request. Latency: The time to complete a resolver invocation. Cache hits: The number of cache hits during a request. Cache misses: The number of cache misses during a request. These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request. Metrics will be recorded by API ID and resolver name. resolverLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_RESOLVER_METRICS: Records and emits metric data for all resolvers in the request. PER_RESOLVER_METRICS: Records and emits metric data for resolvers that have the metricsConfig value set to ENABLED. dataSourceLevelMetricsBehavior: Controls how data source metrics will be emitted to CloudWatch. Data source metrics include: Requests: The number of invocations that occured during a request. Latency: The time to complete a data source invocation. Errors: The number of errors that occurred during a data source invocation. These metrics can be emitted to CloudWatch per data source or for all data sources in the request. Metrics will be recorded by API ID and data source name. dataSourceLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_DATA_SOURCE_METRICS: Records and emits metric data for all data sources in the request. PER_DATA_SOURCE_METRICS: Records and emits metric data for data sources that have the metricsConfig value set to ENABLED. operationLevelMetricsConfig: Controls how operation metrics will be emitted to CloudWatch. Operation metrics include: Requests: The number of times a specified GraphQL operation was called. GraphQL errors: The number of GraphQL errors that occurred during a specified GraphQL operation. Metrics will be recorded by API ID and operation name. You can set the value to ENABLED or DISABLED.</td>
</tr>
<tr>
    <td><CopyableCode code="introspectionConfig" /></td>
    <td><code>string</code></td>
    <td>Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled. For more information about introspection, see GraphQL introspection. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaAuthorizerConfig" /></td>
    <td><code>object</code></td>
    <td>A LambdaAuthorizerConfig specifies how to authorize AppSync API access when using the AWS_LAMBDA authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>The Amazon CloudWatch Logs configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="mergedApiExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the AUTO_MERGE to update the merged API endpoint with the source API changes automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="openIDConnectConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an OpenID Connect (OIDC) configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the GraphQL API.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerContact" /></td>
    <td><code>string</code></td>
    <td>The owner contact information for an API resource. This field accepts any string input with a length of 0 - 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="queryDepthLimit" /></td>
    <td><code>integer</code></td>
    <td>The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is 0 (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between 1 and 75 nested levels. This field will produce a limit error if the operation falls out of bounds. Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.</td>
</tr>
<tr>
    <td><CopyableCode code="resolverCountLimit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resolvers that can be invoked in a single request. The default value is 0 (or unspecified), which will set the limit to 10000. When specified, the limit value can be between 1 and 10000. This field will produce a limit error if the operation falls out of bounds.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="uris" /></td>
    <td><code>object</code></td>
    <td>The URIs.</td>
</tr>
<tr>
    <td><CopyableCode code="userPoolConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an Amazon Cognito user pool configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Sets the value of the GraphQL API to public (GLOBAL) or private (PRIVATE). If no value is provided, the visibility will be set to GLOBAL by default. This value cannot be changed once the API has been created. (GLOBAL, PRIVATE)</td>
</tr>
<tr>
    <td><CopyableCode code="wafWebAclArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the WAF access control list (ACL) associated with this GraphqlApi, if one exists.</td>
</tr>
<tr>
    <td><CopyableCode code="xrayEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether to use X-Ray tracing for this GraphqlApi.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_graphql_apis">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The API name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="additionalAuthenticationProviders" /></td>
    <td><code>array</code></td>
    <td>A list of additional authentication providers for the GraphqlApi API.</td>
</tr>
<tr>
    <td><CopyableCode code="apiId" /></td>
    <td><code>string</code></td>
    <td>The API ID.</td>
</tr>
<tr>
    <td><CopyableCode code="apiType" /></td>
    <td><code>string</code></td>
    <td>The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). (GRAPHQL, MERGED)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="authenticationType" /></td>
    <td><code>string</code></td>
    <td>The authentication type. (API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT, AWS_LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>object</code></td>
    <td>The DNS records for the API.</td>
</tr>
<tr>
    <td><CopyableCode code="enhancedMetricsConfig" /></td>
    <td><code>object</code></td>
    <td>Enables and controls the enhanced metrics feature. Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent. Enhanced metrics can be configured at the resolver, data source, and operation levels. EnhancedMetricsConfig contains three required parameters, each controlling one of these categories: resolverLevelMetricsBehavior: Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include: GraphQL errors: The number of GraphQL errors that occurred. Requests: The number of invocations that occurred during a request. Latency: The time to complete a resolver invocation. Cache hits: The number of cache hits during a request. Cache misses: The number of cache misses during a request. These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request. Metrics will be recorded by API ID and resolver name. resolverLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_RESOLVER_METRICS: Records and emits metric data for all resolvers in the request. PER_RESOLVER_METRICS: Records and emits metric data for resolvers that have the metricsConfig value set to ENABLED. dataSourceLevelMetricsBehavior: Controls how data source metrics will be emitted to CloudWatch. Data source metrics include: Requests: The number of invocations that occured during a request. Latency: The time to complete a data source invocation. Errors: The number of errors that occurred during a data source invocation. These metrics can be emitted to CloudWatch per data source or for all data sources in the request. Metrics will be recorded by API ID and data source name. dataSourceLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_DATA_SOURCE_METRICS: Records and emits metric data for all data sources in the request. PER_DATA_SOURCE_METRICS: Records and emits metric data for data sources that have the metricsConfig value set to ENABLED. operationLevelMetricsConfig: Controls how operation metrics will be emitted to CloudWatch. Operation metrics include: Requests: The number of times a specified GraphQL operation was called. GraphQL errors: The number of GraphQL errors that occurred during a specified GraphQL operation. Metrics will be recorded by API ID and operation name. You can set the value to ENABLED or DISABLED.</td>
</tr>
<tr>
    <td><CopyableCode code="introspectionConfig" /></td>
    <td><code>string</code></td>
    <td>Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled. For more information about introspection, see GraphQL introspection. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaAuthorizerConfig" /></td>
    <td><code>object</code></td>
    <td>A LambdaAuthorizerConfig specifies how to authorize AppSync API access when using the AWS_LAMBDA authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>The Amazon CloudWatch Logs configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="mergedApiExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the AUTO_MERGE to update the merged API endpoint with the source API changes automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="openIDConnectConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an OpenID Connect (OIDC) configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the GraphQL API.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerContact" /></td>
    <td><code>string</code></td>
    <td>The owner contact information for an API resource. This field accepts any string input with a length of 0 - 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="queryDepthLimit" /></td>
    <td><code>integer</code></td>
    <td>The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is 0 (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between 1 and 75 nested levels. This field will produce a limit error if the operation falls out of bounds. Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.</td>
</tr>
<tr>
    <td><CopyableCode code="resolverCountLimit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resolvers that can be invoked in a single request. The default value is 0 (or unspecified), which will set the limit to 10000. When specified, the limit value can be between 1 and 10000. This field will produce a limit error if the operation falls out of bounds.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="uris" /></td>
    <td><code>object</code></td>
    <td>The URIs.</td>
</tr>
<tr>
    <td><CopyableCode code="userPoolConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an Amazon Cognito user pool configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Sets the value of the GraphQL API to public (GLOBAL) or private (PRIVATE). If no value is provided, the visibility will be set to GLOBAL by default. This value cannot be changed once the API has been created. (GLOBAL, PRIVATE)</td>
</tr>
<tr>
    <td><CopyableCode code="wafWebAclArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the WAF access control list (ACL) associated with this GraphqlApi, if one exists.</td>
</tr>
<tr>
    <td><CopyableCode code="xrayEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether to use X-Ray tracing for this GraphqlApi.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_graphql_api"><CopyableCode code="get_graphql_api" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a GraphqlApi object.</td>
</tr>
<tr>
    <td><a href="#list_graphql_apis"><CopyableCode code="list_graphql_apis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-apiType"><code>apiType</code></a>, <a href="#parameter-owner"><code>owner</code></a></td>
    <td>Lists your GraphQL APIs.</td>
</tr>
<tr>
    <td><a href="#create_graphql_api"><CopyableCode code="create_graphql_api" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-authenticationType"><code>authenticationType</code></a></td>
    <td></td>
    <td>Creates a GraphqlApi object.</td>
</tr>
<tr>
    <td><a href="#update_graphql_api"><CopyableCode code="update_graphql_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-authenticationType"><code>authenticationType</code></a></td>
    <td></td>
    <td>Updates a GraphqlApi object.</td>
</tr>
<tr>
    <td><a href="#associate_merged_graphql_api"><CopyableCode code="associate_merged_graphql_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-source_api_identifier"><code>source_api_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-mergedApiIdentifier"><code>mergedApiIdentifier</code></a></td>
    <td></td>
    <td>Creates an association between a Merged API and source API using the source API's identifier.</td>
</tr>
<tr>
    <td><a href="#associate_source_graphql_api"><CopyableCode code="associate_source_graphql_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-merged_api_identifier"><code>merged_api_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceApiIdentifier"><code>sourceApiIdentifier</code></a></td>
    <td></td>
    <td>Creates an association between a Merged API and source API using the Merged API's identifier.</td>
</tr>
<tr>
    <td><a href="#disassociate_merged_graphql_api"><CopyableCode code="disassociate_merged_graphql_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-source_api_identifier"><code>source_api_identifier</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an association between a Merged API and source API using the source API's identifier and the association ID.</td>
</tr>
<tr>
    <td><a href="#disassociate_source_graphql_api"><CopyableCode code="disassociate_source_graphql_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-merged_api_identifier"><code>merged_api_identifier</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an association between a Merged API and source API using the Merged API's identifier and the association ID.</td>
</tr>
<tr>
    <td><a href="#delete_graphql_api"><CopyableCode code="delete_graphql_api" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a GraphqlApi object.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-api_id">
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The API ID.</td>
</tr>
<tr id="parameter-association_id">
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID generated by the AppSync service for the source API association.</td>
</tr>
<tr id="parameter-merged_api_identifier">
    <td><CopyableCode code="merged_api_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-source_api_identifier">
    <td><CopyableCode code="source_api_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.</td>
</tr>
<tr id="parameter-apiType">
    <td><CopyableCode code="apiType" /></td>
    <td><code>string</code></td>
    <td>The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that you want the request to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the GraphQL API.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_graphql_api"
    values={[
        { label: 'get_graphql_api', value: 'get_graphql_api' },
        { label: 'list_graphql_apis', value: 'list_graphql_apis' }
    ]}
>
<TabItem value="get_graphql_api">

Retrieves a GraphqlApi object.

```sql
SELECT
name,
additionalAuthenticationProviders,
apiId,
apiType,
arn,
authenticationType,
dns,
enhancedMetricsConfig,
introspectionConfig,
lambdaAuthorizerConfig,
logConfig,
mergedApiExecutionRoleArn,
openIDConnectConfig,
owner,
ownerContact,
queryDepthLimit,
resolverCountLimit,
tags,
uris,
userPoolConfig,
visibility,
wafWebAclArn,
xrayEnabled
FROM aws.appsync.graphql_apis
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_graphql_apis">

Lists your GraphQL APIs.

```sql
SELECT
name,
additionalAuthenticationProviders,
apiId,
apiType,
arn,
authenticationType,
dns,
enhancedMetricsConfig,
introspectionConfig,
lambdaAuthorizerConfig,
logConfig,
mergedApiExecutionRoleArn,
openIDConnectConfig,
owner,
ownerContact,
queryDepthLimit,
resolverCountLimit,
tags,
uris,
userPoolConfig,
visibility,
wafWebAclArn,
xrayEnabled
FROM aws.appsync.graphql_apis
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND apiType = '{{ apiType }}'
AND owner = '{{ owner }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_graphql_api"
    values={[
        { label: 'create_graphql_api', value: 'create_graphql_api' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_graphql_api">

Creates a GraphqlApi object.

```sql
INSERT INTO aws.appsync.graphql_apis (
name,
logConfig,
authenticationType,
userPoolConfig,
openIDConnectConfig,
tags,
additionalAuthenticationProviders,
xrayEnabled,
lambdaAuthorizerConfig,
apiType,
mergedApiExecutionRoleArn,
visibility,
ownerContact,
introspectionConfig,
queryDepthLimit,
resolverCountLimit,
enhancedMetricsConfig,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ logConfig }}',
'{{ authenticationType }}' /* required */,
'{{ userPoolConfig }}',
'{{ openIDConnectConfig }}',
'{{ tags }}',
'{{ additionalAuthenticationProviders }}',
{{ xrayEnabled }},
'{{ lambdaAuthorizerConfig }}',
'{{ apiType }}',
'{{ mergedApiExecutionRoleArn }}',
'{{ visibility }}',
'{{ ownerContact }}',
'{{ introspectionConfig }}',
{{ queryDepthLimit }},
{{ resolverCountLimit }},
'{{ enhancedMetricsConfig }}',
'{{ region }}'
RETURNING
graphqlApi
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: graphql_apis
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the graphql_apis resource.
    - name: name
      value: "{{ name }}"
    - name: logConfig
      description: |
        The Amazon CloudWatch Logs configuration.
      value:
        fieldLogLevel: "{{ fieldLogLevel }}"
        cloudWatchLogsRoleArn: "{{ cloudWatchLogsRoleArn }}"
        excludeVerboseContent: {{ excludeVerboseContent }}
    - name: authenticationType
      value: "{{ authenticationType }}"
      valid_values: ['API_KEY', 'AWS_IAM', 'AMAZON_COGNITO_USER_POOLS', 'OPENID_CONNECT', 'AWS_LAMBDA']
    - name: userPoolConfig
      description: |
        Describes an Amazon Cognito user pool configuration.
      value:
        userPoolId: "{{ userPoolId }}"
        awsRegion: "{{ awsRegion }}"
        defaultAction: "{{ defaultAction }}"
        appIdClientRegex: "{{ appIdClientRegex }}"
    - name: openIDConnectConfig
      description: |
        Describes an OpenID Connect (OIDC) configuration.
      value:
        issuer: "{{ issuer }}"
        clientId: "{{ clientId }}"
        iatTTL: {{ iatTTL }}
        authTTL: {{ authTTL }}
    - name: tags
      value: "{{ tags }}"
      description: |
        A map with keys of TagKey objects and values of TagValue objects.
    - name: additionalAuthenticationProviders
      value:
        - authenticationType: "{{ authenticationType }}"
          openIDConnectConfig:
            issuer: "{{ issuer }}"
            clientId: "{{ clientId }}"
            iatTTL: {{ iatTTL }}
            authTTL: {{ authTTL }}
          userPoolConfig:
            userPoolId: "{{ userPoolId }}"
            awsRegion: "{{ awsRegion }}"
            appIdClientRegex: "{{ appIdClientRegex }}"
          lambdaAuthorizerConfig:
            authorizerResultTtlInSeconds: {{ authorizerResultTtlInSeconds }}
            authorizerUri: "{{ authorizerUri }}"
            identityValidationExpression: "{{ identityValidationExpression }}"
    - name: xrayEnabled
      value: {{ xrayEnabled }}
    - name: lambdaAuthorizerConfig
      description: |
        A LambdaAuthorizerConfig specifies how to authorize AppSync API access when using the AWS_LAMBDA authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.
      value:
        authorizerResultTtlInSeconds: {{ authorizerResultTtlInSeconds }}
        authorizerUri: "{{ authorizerUri }}"
        identityValidationExpression: "{{ identityValidationExpression }}"
    - name: apiType
      value: "{{ apiType }}"
      valid_values: ['GRAPHQL', 'MERGED']
    - name: mergedApiExecutionRoleArn
      value: "{{ mergedApiExecutionRoleArn }}"
    - name: visibility
      value: "{{ visibility }}"
      valid_values: ['GLOBAL', 'PRIVATE']
    - name: ownerContact
      value: "{{ ownerContact }}"
    - name: introspectionConfig
      value: "{{ introspectionConfig }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: queryDepthLimit
      value: {{ queryDepthLimit }}
    - name: resolverCountLimit
      value: {{ resolverCountLimit }}
    - name: enhancedMetricsConfig
      description: |
        Enables and controls the enhanced metrics feature. Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent. Enhanced metrics can be configured at the resolver, data source, and operation levels. EnhancedMetricsConfig contains three required parameters, each controlling one of these categories: resolverLevelMetricsBehavior: Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include: GraphQL errors: The number of GraphQL errors that occurred. Requests: The number of invocations that occurred during a request. Latency: The time to complete a resolver invocation. Cache hits: The number of cache hits during a request. Cache misses: The number of cache misses during a request. These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request. Metrics will be recorded by API ID and resolver name. resolverLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_RESOLVER_METRICS: Records and emits metric data for all resolvers in the request. PER_RESOLVER_METRICS: Records and emits metric data for resolvers that have the metricsConfig value set to ENABLED. dataSourceLevelMetricsBehavior: Controls how data source metrics will be emitted to CloudWatch. Data source metrics include: Requests: The number of invocations that occured during a request. Latency: The time to complete a data source invocation. Errors: The number of errors that occurred during a data source invocation. These metrics can be emitted to CloudWatch per data source or for all data sources in the request. Metrics will be recorded by API ID and data source name. dataSourceLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_DATA_SOURCE_METRICS: Records and emits metric data for all data sources in the request. PER_DATA_SOURCE_METRICS: Records and emits metric data for data sources that have the metricsConfig value set to ENABLED. operationLevelMetricsConfig: Controls how operation metrics will be emitted to CloudWatch. Operation metrics include: Requests: The number of times a specified GraphQL operation was called. GraphQL errors: The number of GraphQL errors that occurred during a specified GraphQL operation. Metrics will be recorded by API ID and operation name. You can set the value to ENABLED or DISABLED.
      value:
        resolverLevelMetricsBehavior: "{{ resolverLevelMetricsBehavior }}"
        dataSourceLevelMetricsBehavior: "{{ dataSourceLevelMetricsBehavior }}"
        operationLevelMetricsConfig: "{{ operationLevelMetricsConfig }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_graphql_api"
    values={[
        { label: 'update_graphql_api', value: 'update_graphql_api' },
        { label: 'associate_merged_graphql_api', value: 'associate_merged_graphql_api' },
        { label: 'associate_source_graphql_api', value: 'associate_source_graphql_api' },
        { label: 'disassociate_merged_graphql_api', value: 'disassociate_merged_graphql_api' },
        { label: 'disassociate_source_graphql_api', value: 'disassociate_source_graphql_api' }
    ]}
>
<TabItem value="update_graphql_api">

Updates a GraphqlApi object.

```sql
UPDATE aws.appsync.graphql_apis
SET 
name = '{{ name }}',
logConfig = '{{ logConfig }}',
authenticationType = '{{ authenticationType }}',
userPoolConfig = '{{ userPoolConfig }}',
openIDConnectConfig = '{{ openIDConnectConfig }}',
additionalAuthenticationProviders = '{{ additionalAuthenticationProviders }}',
xrayEnabled = {{ xrayEnabled }},
lambdaAuthorizerConfig = '{{ lambdaAuthorizerConfig }}',
mergedApiExecutionRoleArn = '{{ mergedApiExecutionRoleArn }}',
ownerContact = '{{ ownerContact }}',
introspectionConfig = '{{ introspectionConfig }}',
queryDepthLimit = {{ queryDepthLimit }},
resolverCountLimit = {{ resolverCountLimit }},
enhancedMetricsConfig = '{{ enhancedMetricsConfig }}'
WHERE 
api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND authenticationType = '{{ authenticationType }}' --required
RETURNING
graphqlApi;
```
</TabItem>
<TabItem value="associate_merged_graphql_api">

Creates an association between a Merged API and source API using the source API's identifier.

```sql
UPDATE aws.appsync.graphql_apis
SET 
mergedApiIdentifier = '{{ mergedApiIdentifier }}',
description = '{{ description }}',
sourceApiAssociationConfig = '{{ sourceApiAssociationConfig }}'
WHERE 
source_api_identifier = '{{ source_api_identifier }}' --required
AND region = '{{ region }}' --required
AND mergedApiIdentifier = '{{ mergedApiIdentifier }}' --required
RETURNING
sourceApiAssociation;
```
</TabItem>
<TabItem value="associate_source_graphql_api">

Creates an association between a Merged API and source API using the Merged API's identifier.

```sql
UPDATE aws.appsync.graphql_apis
SET 
sourceApiIdentifier = '{{ sourceApiIdentifier }}',
description = '{{ description }}',
sourceApiAssociationConfig = '{{ sourceApiAssociationConfig }}'
WHERE 
merged_api_identifier = '{{ merged_api_identifier }}' --required
AND region = '{{ region }}' --required
AND sourceApiIdentifier = '{{ sourceApiIdentifier }}' --required
RETURNING
sourceApiAssociation;
```
</TabItem>
<TabItem value="disassociate_merged_graphql_api">

Deletes an association between a Merged API and source API using the source API's identifier and the association ID.

```sql
UPDATE aws.appsync.graphql_apis
SET 
-- No updatable properties
WHERE 
source_api_identifier = '{{ source_api_identifier }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
RETURNING
sourceApiAssociationStatus;
```
</TabItem>
<TabItem value="disassociate_source_graphql_api">

Deletes an association between a Merged API and source API using the Merged API's identifier and the association ID.

```sql
UPDATE aws.appsync.graphql_apis
SET 
-- No updatable properties
WHERE 
merged_api_identifier = '{{ merged_api_identifier }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
RETURNING
sourceApiAssociationStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_graphql_api"
    values={[
        { label: 'delete_graphql_api', value: 'delete_graphql_api' }
    ]}
>
<TabItem value="delete_graphql_api">

Deletes a GraphqlApi object.

```sql
DELETE FROM aws.appsync.graphql_apis
WHERE api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
