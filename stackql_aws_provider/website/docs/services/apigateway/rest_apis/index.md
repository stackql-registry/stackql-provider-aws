--- 
title: rest_apis
hide_title: false
hide_table_of_contents: false
keywords:
  - rest_apis
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>rest_apis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rest_apis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.rest_apis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rest_api"
    values={[
        { label: 'get_rest_api', value: 'get_rest_api' },
        { label: 'get_rest_apis', value: 'get_rest_apis' }
    ]}
>
<TabItem value="get_rest_api">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The API's identifier. This identifier is unique across all of your APIs in API Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The API's name.</td>
</tr>
<tr>
    <td><CopyableCode code="apiKeySource" /></td>
    <td><code>string</code></td>
    <td>The source of the API key for metering requests according to a usage plan. Valid values are: &gt;HEADER to read the API key from the X-API-Key header of a request. AUTHORIZER to read the API key from the UsageIdentifierKey from a custom authorizer. (HEADER, AUTHORIZER)</td>
</tr>
<tr>
    <td><CopyableCode code="apiStatus" /></td>
    <td><code>string</code></td>
    <td>The ApiStatus of the RestApi. (UPDATING, AVAILABLE, PENDING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="apiStatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message of the RestApi. When the status message is UPDATING you can still invoke it.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryMediaTypes" /></td>
    <td><code>array</code></td>
    <td>The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The API's description.</td>
</tr>
<tr>
    <td><CopyableCode code="disableExecuteApiEndpoint" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https:​//&#123;api_id&#125;.execute-api.&#123;region&#125;.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointAccessMode" /></td>
    <td><code>string</code></td>
    <td>The endpoint access mode of the RestApi. (BASIC, STRICT)</td>
</tr>
<tr>
    <td><CopyableCode code="endpointConfiguration" /></td>
    <td><code>object</code></td>
    <td>The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has and the IP address types that can invoke it.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumCompressionSize" /></td>
    <td><code>integer</code></td>
    <td>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="rootResourceId" /></td>
    <td><code>string</code></td>
    <td>The API's root resource ID.</td>
</tr>
<tr>
    <td><CopyableCode code="securityPolicy" /></td>
    <td><code>string</code></td>
    <td>The Transport Layer Security (TLS) version + cipher suite for this RestApi. (TLS_1_0, TLS_1_2, SecurityPolicy_TLS13_1_3_2025_09, SecurityPolicy_TLS13_1_3_FIPS_2025_09, SecurityPolicy_TLS13_1_2_PFS_PQ_2025_09, SecurityPolicy_TLS13_1_2_FIPS_PQ_2025_09, SecurityPolicy_TLS13_1_2_FIPS_PFS_PQ_2025_09, SecurityPolicy_TLS13_1_2_PQ_2025_09, SecurityPolicy_TLS13_1_2_2021_06, SecurityPolicy_TLS13_2025_EDGE, SecurityPolicy_TLS12_PFS_2025_EDGE, SecurityPolicy_TLS12_2018_EDGE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A version identifier for the API.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>The warning messages reported when failonwarnings is turned on during API import.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_rest_apis">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The API's identifier. This identifier is unique across all of your APIs in API Gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The API's name.</td>
</tr>
<tr>
    <td><CopyableCode code="apiKeySource" /></td>
    <td><code>string</code></td>
    <td>The source of the API key for metering requests according to a usage plan. Valid values are: &gt;HEADER to read the API key from the X-API-Key header of a request. AUTHORIZER to read the API key from the UsageIdentifierKey from a custom authorizer. (HEADER, AUTHORIZER)</td>
</tr>
<tr>
    <td><CopyableCode code="apiStatus" /></td>
    <td><code>string</code></td>
    <td>The ApiStatus of the RestApi. (UPDATING, AVAILABLE, PENDING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="apiStatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message of the RestApi. When the status message is UPDATING you can still invoke it.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryMediaTypes" /></td>
    <td><code>array</code></td>
    <td>The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The API's description.</td>
</tr>
<tr>
    <td><CopyableCode code="disableExecuteApiEndpoint" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https:​//&#123;api_id&#125;.execute-api.&#123;region&#125;.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointAccessMode" /></td>
    <td><code>string</code></td>
    <td>The endpoint access mode of the RestApi. (BASIC, STRICT)</td>
</tr>
<tr>
    <td><CopyableCode code="endpointConfiguration" /></td>
    <td><code>object</code></td>
    <td>The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has and the IP address types that can invoke it.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumCompressionSize" /></td>
    <td><code>integer</code></td>
    <td>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="rootResourceId" /></td>
    <td><code>string</code></td>
    <td>The API's root resource ID.</td>
</tr>
<tr>
    <td><CopyableCode code="securityPolicy" /></td>
    <td><code>string</code></td>
    <td>The Transport Layer Security (TLS) version + cipher suite for this RestApi. (TLS_1_0, TLS_1_2, SecurityPolicy_TLS13_1_3_2025_09, SecurityPolicy_TLS13_1_3_FIPS_2025_09, SecurityPolicy_TLS13_1_2_PFS_PQ_2025_09, SecurityPolicy_TLS13_1_2_FIPS_PQ_2025_09, SecurityPolicy_TLS13_1_2_FIPS_PFS_PQ_2025_09, SecurityPolicy_TLS13_1_2_PQ_2025_09, SecurityPolicy_TLS13_1_2_2021_06, SecurityPolicy_TLS13_2025_EDGE, SecurityPolicy_TLS12_PFS_2025_EDGE, SecurityPolicy_TLS12_2018_EDGE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A version identifier for the API.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>The warning messages reported when failonwarnings is turned on during API import.</td>
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
    <td><a href="#get_rest_api"><CopyableCode code="get_rest_api" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the RestApi resource in the collection.</td>
</tr>
<tr>
    <td><a href="#get_rest_apis"><CopyableCode code="get_rest_apis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Lists the RestApis resources for your collection.</td>
</tr>
<tr>
    <td><a href="#create_rest_api"><CopyableCode code="create_rest_api" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new RestApi resource.</td>
</tr>
<tr>
    <td><a href="#update_rest_api"><CopyableCode code="update_rest_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes information about the specified API.</td>
</tr>
<tr>
    <td><a href="#put_rest_api"><CopyableCode code="put_rest_api" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td><a href="#parameter-mode"><code>mode</code></a>, <a href="#parameter-failonwarnings"><code>failonwarnings</code></a>, <a href="#parameter-parameters"><code>parameters</code></a></td>
    <td>A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.</td>
</tr>
<tr>
    <td><a href="#delete_rest_api"><CopyableCode code="delete_rest_api" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified API.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr id="parameter-failonwarnings">
    <td><CopyableCode code="failonwarnings" /></td>
    <td><code>boolean</code></td>
    <td>A query parameter to indicate whether to rollback the API update (true) or not (false) when a warning is encountered. The default value is false.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The mode query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default, the update mode is "merge".</td>
</tr>
<tr id="parameter-parameters">
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set ignore=documentation as a parameters value, as in the AWS CLI command of aws apigateway import-rest-api --parameters ignore=documentation --body 'file:​///path/to/imported-api-body.json'.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_rest_api"
    values={[
        { label: 'get_rest_api', value: 'get_rest_api' },
        { label: 'get_rest_apis', value: 'get_rest_apis' }
    ]}
>
<TabItem value="get_rest_api">

Lists the RestApi resource in the collection.

```sql
SELECT
id,
name,
apiKeySource,
apiStatus,
apiStatusMessage,
binaryMediaTypes,
createdDate,
description,
disableExecuteApiEndpoint,
endpointAccessMode,
endpointConfiguration,
minimumCompressionSize,
policy,
rootResourceId,
securityPolicy,
tags,
version,
warnings
FROM aws.apigateway.rest_apis
WHERE restapi_id = '{{ restapi_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_rest_apis">

Lists the RestApis resources for your collection.

```sql
SELECT
id,
name,
apiKeySource,
apiStatus,
apiStatusMessage,
binaryMediaTypes,
createdDate,
description,
disableExecuteApiEndpoint,
endpointAccessMode,
endpointConfiguration,
minimumCompressionSize,
policy,
rootResourceId,
securityPolicy,
tags,
version,
warnings
FROM aws.apigateway.rest_apis
WHERE region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rest_api"
    values={[
        { label: 'create_rest_api', value: 'create_rest_api' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rest_api">

Creates a new RestApi resource.

```sql
INSERT INTO aws.apigateway.rest_apis (
name,
description,
version,
cloneFrom,
binaryMediaTypes,
minimumCompressionSize,
apiKeySource,
endpointConfiguration,
policy,
tags,
disableExecuteApiEndpoint,
securityPolicy,
endpointAccessMode,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ version }}',
'{{ cloneFrom }}',
'{{ binaryMediaTypes }}',
{{ minimumCompressionSize }},
'{{ apiKeySource }}',
'{{ endpointConfiguration }}',
'{{ policy }}',
'{{ tags }}',
{{ disableExecuteApiEndpoint }},
'{{ securityPolicy }}',
'{{ endpointAccessMode }}',
'{{ region }}'
RETURNING
id,
name,
apiKeySource,
apiStatus,
apiStatusMessage,
binaryMediaTypes,
createdDate,
description,
disableExecuteApiEndpoint,
endpointAccessMode,
endpointConfiguration,
minimumCompressionSize,
policy,
rootResourceId,
securityPolicy,
tags,
version,
warnings
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rest_apis
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rest_apis resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: version
      value: "{{ version }}"
    - name: cloneFrom
      value: "{{ cloneFrom }}"
    - name: binaryMediaTypes
      value:
        - "{{ binaryMediaTypes }}"
    - name: minimumCompressionSize
      value: {{ minimumCompressionSize }}
    - name: apiKeySource
      value: "{{ apiKeySource }}"
      valid_values: ['HEADER', 'AUTHORIZER']
    - name: endpointConfiguration
      description: |
        The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has and the IP address types that can invoke it.
      value:
        types:
          - "{{ types }}"
        ipAddressType: "{{ ipAddressType }}"
        vpcEndpointIds:
          - "{{ vpcEndpointIds }}"
    - name: policy
      value: "{{ policy }}"
    - name: tags
      value: "{{ tags }}"
    - name: disableExecuteApiEndpoint
      value: {{ disableExecuteApiEndpoint }}
    - name: securityPolicy
      value: "{{ securityPolicy }}"
      valid_values: ['TLS_1_0', 'TLS_1_2', 'SecurityPolicy_TLS13_1_3_2025_09', 'SecurityPolicy_TLS13_1_3_FIPS_2025_09', 'SecurityPolicy_TLS13_1_2_PFS_PQ_2025_09', 'SecurityPolicy_TLS13_1_2_FIPS_PQ_2025_09', 'SecurityPolicy_TLS13_1_2_FIPS_PFS_PQ_2025_09', 'SecurityPolicy_TLS13_1_2_PQ_2025_09', 'SecurityPolicy_TLS13_1_2_2021_06', 'SecurityPolicy_TLS13_2025_EDGE', 'SecurityPolicy_TLS12_PFS_2025_EDGE', 'SecurityPolicy_TLS12_2018_EDGE']
    - name: endpointAccessMode
      value: "{{ endpointAccessMode }}"
      valid_values: ['BASIC', 'STRICT']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rest_api"
    values={[
        { label: 'update_rest_api', value: 'update_rest_api' }
    ]}
>
<TabItem value="update_rest_api">

Changes information about the specified API.

```sql
UPDATE aws.apigateway.rest_apis
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
apiKeySource,
apiStatus,
apiStatusMessage,
binaryMediaTypes,
createdDate,
description,
disableExecuteApiEndpoint,
endpointAccessMode,
endpointConfiguration,
minimumCompressionSize,
policy,
rootResourceId,
securityPolicy,
tags,
version,
warnings;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_rest_api"
    values={[
        { label: 'put_rest_api', value: 'put_rest_api' }
    ]}
>
<TabItem value="put_rest_api">

A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.

```sql
REPLACE aws.apigateway.rest_apis
SET 
body = '{{ body }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND region = '{{ region }}' --required
AND body = '{{ body }}' --required
AND mode = '{{ mode}}'
AND failonwarnings = {{ failonwarnings}}
AND parameters = '{{ parameters}}'
RETURNING
id,
name,
apiKeySource,
apiStatus,
apiStatusMessage,
binaryMediaTypes,
createdDate,
description,
disableExecuteApiEndpoint,
endpointAccessMode,
endpointConfiguration,
minimumCompressionSize,
policy,
rootResourceId,
securityPolicy,
tags,
version,
warnings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rest_api"
    values={[
        { label: 'delete_rest_api', value: 'delete_rest_api' }
    ]}
>
<TabItem value="delete_rest_api">

Deletes the specified API.

```sql
DELETE FROM aws.apigateway.rest_apis
WHERE restapi_id = '{{ restapi_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
