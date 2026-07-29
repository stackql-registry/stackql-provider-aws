--- 
title: marketplace_model_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - marketplace_model_endpoints
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>marketplace_model_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="marketplace_model_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.marketplace_model_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_marketplace_model_endpoint"
    values={[
        { label: 'get_marketplace_model_endpoint', value: 'get_marketplace_model_endpoint' },
        { label: 'list_marketplace_model_endpoints', value: 'list_marketplace_model_endpoints' }
    ]}
>
<TabItem value="get_marketplace_model_endpoint">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the endpoint was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_config" /></td>
    <td><code>object</code></td>
    <td>Specifies the configuration for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the endpoint (e.g., Creating, InService, Updating, Failed).</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the endpoint status, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="model_source_identifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the model from Amazon Bedrock Marketplace that is deployed on this endpoint. (pattern: &lt;code&gt;.*arn:aws:sagemaker:.*:hub-content/SageMakerPublicHub/Model/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the endpoint in Amazon Bedrock Marketplace (e.g., ACTIVE, INACTIVE). (REGISTERED, INCOMPATIBLE_ENDPOINT)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the overall status, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the endpoint was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_marketplace_model_endpoints">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="model_source_identifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the model from Amazon Bedrock Marketplace that is deployed on this endpoint. (pattern: &lt;code&gt;.*arn:aws:sagemaker:.*:hub-content/SageMakerPublicHub/Model/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the endpoint in Amazon Bedrock Marketplace. (REGISTERED, INCOMPATIBLE_ENDPOINT)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the overall status, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the endpoint was last updated.</td>
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
    <td><a href="#get_marketplace_model_endpoint"><CopyableCode code="get_marketplace_model_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-endpoint_arn"><code>endpoint_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific endpoint for a model from Amazon Bedrock Marketplace.</td>
</tr>
<tr>
    <td><a href="#list_marketplace_model_endpoints"><CopyableCode code="list_marketplace_model_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-modelSourceIdentifier"><code>modelSourceIdentifier</code></a></td>
    <td>Lists the endpoints for models from Amazon Bedrock Marketplace in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_marketplace_model_endpoint"><CopyableCode code="create_marketplace_model_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelSourceIdentifier"><code>modelSourceIdentifier</code></a>, <a href="#parameter-endpointConfig"><code>endpointConfig</code></a>, <a href="#parameter-endpointName"><code>endpointName</code></a></td>
    <td></td>
    <td>Creates an endpoint for a model from Amazon Bedrock Marketplace. The endpoint is hosted by Amazon SageMaker.</td>
</tr>
<tr>
    <td><a href="#register_marketplace_model_endpoint"><CopyableCode code="register_marketplace_model_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-endpoint_identifier"><code>endpoint_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelSourceIdentifier"><code>modelSourceIdentifier</code></a></td>
    <td></td>
    <td>Registers an existing Amazon SageMaker endpoint with Amazon Bedrock Marketplace, allowing it to be used with Amazon Bedrock APIs.</td>
</tr>
<tr>
    <td><a href="#update_marketplace_model_endpoint"><CopyableCode code="update_marketplace_model_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-endpoint_arn"><code>endpoint_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-endpointConfig"><code>endpointConfig</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing endpoint for a model from Amazon Bedrock Marketplace.</td>
</tr>
<tr>
    <td><a href="#delete_marketplace_model_endpoint"><CopyableCode code="delete_marketplace_model_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-endpoint_arn"><code>endpoint_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an endpoint for a model from Amazon Bedrock Marketplace.</td>
</tr>
<tr>
    <td><a href="#deregister_marketplace_model_endpoint"><CopyableCode code="deregister_marketplace_model_endpoint" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpoint_arn"><code>endpoint_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters an endpoint for a model from Amazon Bedrock Marketplace. This operation removes the endpoint's association with Amazon Bedrock but does not delete the underlying Amazon SageMaker endpoint.</td>
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
<tr id="parameter-endpoint_arn">
    <td><CopyableCode code="endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint you want to deregister.</td>
</tr>
<tr id="parameter-endpoint_identifier">
    <td><CopyableCode code="endpoint_identifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon SageMaker endpoint you want to register with Amazon Bedrock Marketplace.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. If more results are available, the operation returns a NextToken value.</td>
</tr>
<tr id="parameter-modelSourceIdentifier">
    <td><CopyableCode code="modelSourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>If specified, only endpoints for the given model source identifier are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous ListMarketplaceModelEndpoints call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_marketplace_model_endpoint"
    values={[
        { label: 'get_marketplace_model_endpoint', value: 'get_marketplace_model_endpoint' },
        { label: 'list_marketplace_model_endpoints', value: 'list_marketplace_model_endpoints' }
    ]}
>
<TabItem value="get_marketplace_model_endpoint">

Retrieves details about a specific endpoint for a model from Amazon Bedrock Marketplace.

```sql
SELECT
created_at,
endpoint_arn,
endpoint_config,
endpoint_status,
endpoint_status_message,
model_source_identifier,
status,
status_message,
updated_at
FROM aws.bedrock.marketplace_model_endpoints
WHERE endpoint_arn = '{{ endpoint_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_marketplace_model_endpoints">

Lists the endpoints for models from Amazon Bedrock Marketplace in your Amazon Web Services account.

```sql
SELECT
created_at,
endpoint_arn,
model_source_identifier,
status,
status_message,
updated_at
FROM aws.bedrock.marketplace_model_endpoints
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND modelSourceIdentifier = '{{ modelSourceIdentifier }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_marketplace_model_endpoint"
    values={[
        { label: 'create_marketplace_model_endpoint', value: 'create_marketplace_model_endpoint' },
        { label: 'register_marketplace_model_endpoint', value: 'register_marketplace_model_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_marketplace_model_endpoint">

Creates an endpoint for a model from Amazon Bedrock Marketplace. The endpoint is hosted by Amazon SageMaker.

```sql
INSERT INTO aws.bedrock.marketplace_model_endpoints (
modelSourceIdentifier,
endpointConfig,
acceptEula,
endpointName,
clientRequestToken,
tags,
region
)
SELECT 
'{{ modelSourceIdentifier }}' /* required */,
'{{ endpointConfig }}' /* required */,
{{ acceptEula }},
'{{ endpointName }}' /* required */,
'{{ clientRequestToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
marketplace_model_endpoint
;
```
</TabItem>
<TabItem value="register_marketplace_model_endpoint">

Registers an existing Amazon SageMaker endpoint with Amazon Bedrock Marketplace, allowing it to be used with Amazon Bedrock APIs.

```sql
INSERT INTO aws.bedrock.marketplace_model_endpoints (
modelSourceIdentifier,
endpoint_identifier,
region
)
SELECT 
'{{ modelSourceIdentifier }}' /* required */,
'{{ endpoint_identifier }}',
'{{ region }}'
RETURNING
marketplace_model_endpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: marketplace_model_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the marketplace_model_endpoints resource.
    - name: endpoint_identifier
      value: "{{ endpoint_identifier }}"
      description: Required parameter for the marketplace_model_endpoints resource.
    - name: modelSourceIdentifier
      value: "{{ modelSourceIdentifier }}"
    - name: endpointConfig
      description: |
        Specifies the configuration for the endpoint.
      value:
        sageMaker:
          initialInstanceCount: {{ initialInstanceCount }}
          instanceType: "{{ instanceType }}"
          executionRole: "{{ executionRole }}"
          kmsEncryptionKey: "{{ kmsEncryptionKey }}"
          vpc:
            subnetIds:
              - "{{ subnetIds }}"
            securityGroupIds:
              - "{{ securityGroupIds }}"
    - name: acceptEula
      value: {{ acceptEula }}
    - name: endpointName
      value: "{{ endpointName }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_marketplace_model_endpoint"
    values={[
        { label: 'update_marketplace_model_endpoint', value: 'update_marketplace_model_endpoint' }
    ]}
>
<TabItem value="update_marketplace_model_endpoint">

Updates the configuration of an existing endpoint for a model from Amazon Bedrock Marketplace.

```sql
UPDATE aws.bedrock.marketplace_model_endpoints
SET 
endpointConfig = '{{ endpointConfig }}',
clientRequestToken = '{{ clientRequestToken }}'
WHERE 
endpoint_arn = '{{ endpoint_arn }}' --required
AND region = '{{ region }}' --required
AND endpointConfig = '{{ endpointConfig }}' --required
RETURNING
marketplace_model_endpoint;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_marketplace_model_endpoint"
    values={[
        { label: 'delete_marketplace_model_endpoint', value: 'delete_marketplace_model_endpoint' }
    ]}
>
<TabItem value="delete_marketplace_model_endpoint">

Deletes an endpoint for a model from Amazon Bedrock Marketplace.

```sql
DELETE FROM aws.bedrock.marketplace_model_endpoints
WHERE endpoint_arn = '{{ endpoint_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deregister_marketplace_model_endpoint"
    values={[
        { label: 'deregister_marketplace_model_endpoint', value: 'deregister_marketplace_model_endpoint' }
    ]}
>
<TabItem value="deregister_marketplace_model_endpoint">

Deregisters an endpoint for a model from Amazon Bedrock Marketplace. This operation removes the endpoint's association with Amazon Bedrock but does not delete the underlying Amazon SageMaker endpoint.

```sql
EXEC aws.bedrock.marketplace_model_endpoints.deregister_marketplace_model_endpoint 
@endpoint_arn='{{ endpoint_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
