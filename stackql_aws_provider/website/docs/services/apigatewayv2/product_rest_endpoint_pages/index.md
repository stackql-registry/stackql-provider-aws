--- 
title: product_rest_endpoint_pages
hide_title: false
hide_table_of_contents: false
keywords:
  - product_rest_endpoint_pages
  - apigatewayv2
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

Creates, updates, deletes, gets or lists a <code>product_rest_endpoint_pages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_rest_endpoint_pages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.product_rest_endpoint_pages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_product_rest_endpoint_page"
    values={[
        { label: 'get_product_rest_endpoint_page', value: 'get_product_rest_endpoint_page' },
        { label: 'list_product_rest_endpoint_pages', value: 'list_product_rest_endpoint_pages' }
    ]}
>
<TabItem value="get_product_rest_endpoint_page">

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
    <td><CopyableCode code="display_content" /></td>
    <td><code>object</code></td>
    <td>The content of the product REST endpoint page.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the product REST endpoint page was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="product_rest_endpoint_page_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the product REST endpoint page.</td>
</tr>
<tr>
    <td><CopyableCode code="product_rest_endpoint_page_id" /></td>
    <td><code>string</code></td>
    <td>The product REST endpoint page identifier. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="raw_display_content" /></td>
    <td><code>string</code></td>
    <td>The raw display content of the product REST endpoint page.</td>
</tr>
<tr>
    <td><CopyableCode code="rest_endpoint_identifier" /></td>
    <td><code>object</code></td>
    <td>The REST API endpoint identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the product REST endpoint page. (AVAILABLE, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_exception" /></td>
    <td><code>object</code></td>
    <td>The status exception information.</td>
</tr>
<tr>
    <td><CopyableCode code="try_it_state" /></td>
    <td><code>string</code></td>
    <td>Represents the try it state for a product REST endpoint page. (ENABLED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_product_rest_endpoint_pages">

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
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint of the product REST endpoint page.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the product REST endpoint page was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_name" /></td>
    <td><code>string</code></td>
    <td>The operation name of the product REST endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="product_rest_endpoint_page_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the product REST endpoint page.</td>
</tr>
<tr>
    <td><CopyableCode code="product_rest_endpoint_page_id" /></td>
    <td><code>string</code></td>
    <td>The product REST endpoint page identifier. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rest_endpoint_identifier" /></td>
    <td><code>object</code></td>
    <td>The REST API endpoint identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (AVAILABLE, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_exception" /></td>
    <td><code>object</code></td>
    <td>The status exception information.</td>
</tr>
<tr>
    <td><CopyableCode code="try_it_state" /></td>
    <td><code>string</code></td>
    <td>Represents the try it state for a product REST endpoint page. (ENABLED, DISABLED)</td>
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
    <td><a href="#get_product_rest_endpoint_page"><CopyableCode code="get_product_rest_endpoint_page" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-product_rest_endpoint_page_id"><code>product_rest_endpoint_page_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeRawDisplayContent"><code>includeRawDisplayContent</code></a>, <a href="#parameter-resourceOwnerAccountId"><code>resourceOwnerAccountId</code></a></td>
    <td>Gets a product REST endpoint page.</td>
</tr>
<tr>
    <td><a href="#list_product_rest_endpoint_pages"><CopyableCode code="list_product_rest_endpoint_pages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-resourceOwnerAccountId"><code>resourceOwnerAccountId</code></a></td>
    <td>Lists the product REST endpoint pages of a portal product.</td>
</tr>
<tr>
    <td><a href="#create_product_rest_endpoint_page"><CopyableCode code="create_product_rest_endpoint_page" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RestEndpointIdentifier"><code>RestEndpointIdentifier</code></a></td>
    <td></td>
    <td>Creates a product REST endpoint page for a portal product.</td>
</tr>
<tr>
    <td><a href="#update_product_rest_endpoint_page"><CopyableCode code="update_product_rest_endpoint_page" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-product_rest_endpoint_page_id"><code>product_rest_endpoint_page_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a product REST endpoint page.</td>
</tr>
<tr>
    <td><a href="#delete_product_rest_endpoint_page"><CopyableCode code="delete_product_rest_endpoint_page" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-portal_product_id"><code>portal_product_id</code></a>, <a href="#parameter-product_rest_endpoint_page_id"><code>product_rest_endpoint_page_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a product REST endpoint page.</td>
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
<tr id="parameter-portal_product_id">
    <td><CopyableCode code="portal_product_id" /></td>
    <td><code>string</code></td>
    <td>The portal product identifier.</td>
</tr>
<tr id="parameter-product_rest_endpoint_page_id">
    <td><CopyableCode code="product_rest_endpoint_page_id" /></td>
    <td><code>string</code></td>
    <td>The product REST endpoint identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includeRawDisplayContent">
    <td><CopyableCode code="includeRawDisplayContent" /></td>
    <td><code>string</code></td>
    <td>The query parameter to include raw display content.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
</tr>
<tr id="parameter-resourceOwnerAccountId">
    <td><CopyableCode code="resourceOwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the resource owner of the portal product.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_product_rest_endpoint_page"
    values={[
        { label: 'get_product_rest_endpoint_page', value: 'get_product_rest_endpoint_page' },
        { label: 'list_product_rest_endpoint_pages', value: 'list_product_rest_endpoint_pages' }
    ]}
>
<TabItem value="get_product_rest_endpoint_page">

Gets a product REST endpoint page.

```sql
SELECT
display_content,
last_modified,
product_rest_endpoint_page_arn,
product_rest_endpoint_page_id,
raw_display_content,
rest_endpoint_identifier,
status,
status_exception,
try_it_state
FROM aws.apigatewayv2.product_rest_endpoint_pages
WHERE portal_product_id = '{{ portal_product_id }}' -- required
AND product_rest_endpoint_page_id = '{{ product_rest_endpoint_page_id }}' -- required
AND region = '{{ region }}' -- required
AND includeRawDisplayContent = '{{ includeRawDisplayContent }}'
AND resourceOwnerAccountId = '{{ resourceOwnerAccountId }}'
;
```
</TabItem>
<TabItem value="list_product_rest_endpoint_pages">

Lists the product REST endpoint pages of a portal product.

```sql
SELECT
endpoint,
last_modified,
operation_name,
product_rest_endpoint_page_arn,
product_rest_endpoint_page_id,
rest_endpoint_identifier,
status,
status_exception,
try_it_state
FROM aws.apigatewayv2.product_rest_endpoint_pages
WHERE portal_product_id = '{{ portal_product_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND resourceOwnerAccountId = '{{ resourceOwnerAccountId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_product_rest_endpoint_page"
    values={[
        { label: 'create_product_rest_endpoint_page', value: 'create_product_rest_endpoint_page' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_product_rest_endpoint_page">

Creates a product REST endpoint page for a portal product.

```sql
INSERT INTO aws.apigatewayv2.product_rest_endpoint_pages (
DisplayContent,
RestEndpointIdentifier,
TryItState,
portal_product_id,
region
)
SELECT 
'{{ DisplayContent }}',
'{{ RestEndpointIdentifier }}' /* required */,
'{{ TryItState }}',
'{{ portal_product_id }}',
'{{ region }}'
RETURNING
display_content,
last_modified,
product_rest_endpoint_page_arn,
product_rest_endpoint_page_id,
rest_endpoint_identifier,
status,
status_exception,
try_it_state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: product_rest_endpoint_pages
  props:
    - name: portal_product_id
      value: "{{ portal_product_id }}"
      description: Required parameter for the product_rest_endpoint_pages resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the product_rest_endpoint_pages resource.
    - name: DisplayContent
      description: |
        Represents the endpoint display content.
      value:
        None: "{{ None }}"
        Overrides:
          Body: "{{ Body }}"
          Endpoint: "{{ Endpoint }}"
          OperationName: "{{ OperationName }}"
    - name: RestEndpointIdentifier
      description: |
        The REST API endpoint identifier.
      value:
        IdentifierParts:
          Method: "{{ Method }}"
          Path: "{{ Path }}"
          RestApiId: "{{ RestApiId }}"
          Stage: "{{ Stage }}"
    - name: TryItState
      value: "{{ TryItState }}"
      description: |
        Represents the try it state for a product REST endpoint page.
      valid_values: ['ENABLED', 'DISABLED']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_product_rest_endpoint_page"
    values={[
        { label: 'update_product_rest_endpoint_page', value: 'update_product_rest_endpoint_page' }
    ]}
>
<TabItem value="update_product_rest_endpoint_page">

Updates a product REST endpoint page.

```sql
UPDATE aws.apigatewayv2.product_rest_endpoint_pages
SET 
DisplayContent = '{{ DisplayContent }}',
TryItState = '{{ TryItState }}'
WHERE 
portal_product_id = '{{ portal_product_id }}' --required
AND product_rest_endpoint_page_id = '{{ product_rest_endpoint_page_id }}' --required
AND region = '{{ region }}' --required
RETURNING
display_content,
last_modified,
product_rest_endpoint_page_arn,
product_rest_endpoint_page_id,
rest_endpoint_identifier,
status,
status_exception,
try_it_state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_product_rest_endpoint_page"
    values={[
        { label: 'delete_product_rest_endpoint_page', value: 'delete_product_rest_endpoint_page' }
    ]}
>
<TabItem value="delete_product_rest_endpoint_page">

Deletes a product REST endpoint page.

```sql
DELETE FROM aws.apigatewayv2.product_rest_endpoint_pages
WHERE portal_product_id = '{{ portal_product_id }}' --required
AND product_rest_endpoint_page_id = '{{ product_rest_endpoint_page_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
