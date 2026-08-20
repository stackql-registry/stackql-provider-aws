--- 
title: whats_app_flows
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_flows
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>whats_app_flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_whats_app_flow"
    values={[
        { label: 'get_whats_app_flow', value: 'get_whats_app_flow' },
        { label: 'list_whats_app_flows', value: 'list_whats_app_flows' }
    ]}
>
<TabItem value="get_whats_app_flow">

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
    <td><CopyableCode code="application" /></td>
    <td><code>object</code></td>
    <td>The Meta application information associated with this Flow.</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The categories that classify the business purpose of the Flow.</td>
</tr>
<tr>
    <td><CopyableCode code="data_api_version" /></td>
    <td><code>string</code></td>
    <td>The data API version for data exchange endpoint Flows.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_uri" /></td>
    <td><code>string</code></td>
    <td>The endpoint URI for data exchange Flows, if configured.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Flow. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Flow.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_status" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the Flow. Valid values are DRAFT, PUBLISHED, DEPRECATED, BLOCKED, and THROTTLED.</td>
</tr>
<tr>
    <td><CopyableCode code="health_status" /></td>
    <td><code>object</code></td>
    <td>The health status information for this Flow from Meta.</td>
</tr>
<tr>
    <td><CopyableCode code="json_version" /></td>
    <td><code>string</code></td>
    <td>The version of the Flow JSON schema used by this Flow (for example, 7.3).</td>
</tr>
<tr>
    <td><CopyableCode code="preview" /></td>
    <td><code>object</code></td>
    <td>The preview URL and its expiration timestamp for testing the Flow.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_errors" /></td>
    <td><code>array</code></td>
    <td>A list of validation errors from Meta, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="whats_app_business_account" /></td>
    <td><code>object</code></td>
    <td>The WhatsApp Business Account information from Meta associated with this Flow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_whats_app_flows">

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
    <td><CopyableCode code="flow_categories" /></td>
    <td><code>array</code></td>
    <td>The categories that classify the business purpose of the Flow.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Flow assigned by Meta. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Flow.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_status" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the Flow (DRAFT, PUBLISHED, DEPRECATED, BLOCKED, or THROTTLED).</td>
</tr>
<tr>
    <td><CopyableCode code="validation_errors" /></td>
    <td><code>array</code></td>
    <td>A list of validation errors from Meta, if any.</td>
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
    <td><a href="#get_whats_app_flow"><CopyableCode code="get_whats_app_flow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-flowId"><code>flowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata and status of a WhatsApp Flow, including validation errors, preview information, and health status.</td>
</tr>
<tr>
    <td><a href="#list_whats_app_flows"><CopyableCode code="list_whats_app_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all WhatsApp Flows for a WhatsApp Business Account. Returns summary information including Flow ID, name, status, and categories.</td>
</tr>
<tr>
    <td><a href="#create_whats_app_flow"><CopyableCode code="create_whats_app_flow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-flowName"><code>flowName</code></a>, <a href="#parameter-categories"><code>categories</code></a></td>
    <td></td>
    <td>Creates a new WhatsApp Flow. Flows enable businesses to create rich, interactive forms and experiences that users can complete without leaving WhatsApp. The Flow is created in DRAFT status. If publish is set to true and a valid flowJson is provided, the Flow is published immediately.</td>
</tr>
<tr>
    <td><a href="#update_whats_app_flow"><CopyableCode code="update_whats_app_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-flowId"><code>flowId</code></a></td>
    <td></td>
    <td>Updates the metadata of a WhatsApp Flow, such as its name or categories. This does not update the Flow JSON definition. Use UpdateWhatsAppFlowAssets to update the Flow JSON.</td>
</tr>
<tr>
    <td><a href="#delete_whats_app_flow"><CopyableCode code="delete_whats_app_flow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-flowId"><code>flowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a WhatsApp Flow permanently. Only Flows in DRAFT status can be deleted. Published or deprecated Flows cannot be deleted.</td>
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
<tr id="parameter-flowId">
    <td><CopyableCode code="flowId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Flow to delete.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the WhatsApp Business Account associated with this Flow.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_whats_app_flow"
    values={[
        { label: 'get_whats_app_flow', value: 'get_whats_app_flow' },
        { label: 'list_whats_app_flows', value: 'list_whats_app_flows' }
    ]}
>
<TabItem value="get_whats_app_flow">

Retrieves the metadata and status of a WhatsApp Flow, including validation errors, preview information, and health status.

```sql
SELECT
application,
categories,
data_api_version,
endpoint_uri,
flow_id,
flow_name,
flow_status,
health_status,
json_version,
preview,
validation_errors,
whats_app_business_account
FROM aws.socialmessaging.whats_app_flows
WHERE id = '{{ id }}' -- required
AND flowId = '{{ flowId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_whats_app_flows">

Lists all WhatsApp Flows for a WhatsApp Business Account. Returns summary information including Flow ID, name, status, and categories.

```sql
SELECT
flow_categories,
flow_id,
flow_name,
flow_status,
validation_errors
FROM aws.socialmessaging.whats_app_flows
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_whats_app_flow"
    values={[
        { label: 'create_whats_app_flow', value: 'create_whats_app_flow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_whats_app_flow">

Creates a new WhatsApp Flow. Flows enable businesses to create rich, interactive forms and experiences that users can complete without leaving WhatsApp. The Flow is created in DRAFT status. If publish is set to true and a valid flowJson is provided, the Flow is published immediately.

```sql
INSERT INTO aws.socialmessaging.whats_app_flows (
id,
flowName,
categories,
flowJson,
publish,
cloneFlowId,
region
)
SELECT 
'{{ id }}' /* required */,
'{{ flowName }}' /* required */,
'{{ categories }}' /* required */,
'{{ flowJson }}',
{{ publish }},
'{{ cloneFlowId }}',
'{{ region }}'
RETURNING
flow_id,
validation_errors
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: whats_app_flows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the whats_app_flows resource.
    - name: id
      value: "{{ id }}"
    - name: flowName
      value: "{{ flowName }}"
    - name: categories
      value:
        - "{{ categories }}"
    - name: flowJson
      value: "{{ flowJson }}"
    - name: publish
      value: {{ publish }}
    - name: cloneFlowId
      value: "{{ cloneFlowId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_whats_app_flow"
    values={[
        { label: 'update_whats_app_flow', value: 'update_whats_app_flow' }
    ]}
>
<TabItem value="update_whats_app_flow">

Updates the metadata of a WhatsApp Flow, such as its name or categories. This does not update the Flow JSON definition. Use UpdateWhatsAppFlowAssets to update the Flow JSON.

```sql
UPDATE aws.socialmessaging.whats_app_flows
SET 
id = '{{ id }}',
flowId = '{{ flowId }}',
flowName = '{{ flowName }}',
categories = '{{ categories }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
AND flowId = '{{ flowId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_whats_app_flow"
    values={[
        { label: 'delete_whats_app_flow', value: 'delete_whats_app_flow' }
    ]}
>
<TabItem value="delete_whats_app_flow">

Deletes a WhatsApp Flow permanently. Only Flows in DRAFT status can be deleted. Published or deprecated Flows cannot be deleted.

```sql
DELETE FROM aws.socialmessaging.whats_app_flows
WHERE id = '{{ id }}' --required
AND flowId = '{{ flowId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
