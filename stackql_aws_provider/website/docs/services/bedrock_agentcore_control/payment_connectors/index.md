--- 
title: payment_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_connectors
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>payment_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.payment_connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_payment_connector"
    values={[
        { label: 'get_payment_connector', value: 'get_payment_connector' },
        { label: 'list_payment_connectors', value: 'list_payment_connectors' }
    ]}
>
<TabItem value="get_payment_connector">

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
    <td>The name of the payment connector. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the payment connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credential_provider_configurations" /></td>
    <td><code>array</code></td>
    <td>The credential provider configurations for the payment connector.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the payment connector. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the payment connector was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the payment connector. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the payment connector. Possible values include CREATING, READY, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, and DELETE_FAILED. (CREATING, UPDATING, DELETING, READY, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the payment connector, which determines the payment provider integration. (CoinbaseCDP, StripePrivy)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_payment_connectors">

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
    <td>The name of the payment connector. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the payment connector was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the payment connector. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the payment connector. Possible values include CREATING, READY, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, and DELETE_FAILED. (CREATING, UPDATING, DELETING, READY, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the payment connector, which determines the payment provider integration. (CoinbaseCDP, StripePrivy)</td>
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
    <td><a href="#get_payment_connector"><CopyableCode code="get_payment_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-payment_manager_id"><code>payment_manager_id</code></a>, <a href="#parameter-payment_connector_id"><code>payment_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific payment connector.</td>
</tr>
<tr>
    <td><a href="#list_payment_connectors"><CopyableCode code="list_payment_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-payment_manager_id"><code>payment_manager_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all payment connectors for a specified payment manager.</td>
</tr>
<tr>
    <td><a href="#create_payment_connector"><CopyableCode code="create_payment_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-payment_manager_id"><code>payment_manager_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-credentialProviderConfigurations"><code>credentialProviderConfigurations</code></a></td>
    <td></td>
    <td>Creates a new payment connector for a payment manager. A payment connector integrates with a supported payment provider to enable payment processing capabilities.</td>
</tr>
<tr>
    <td><a href="#update_payment_connector"><CopyableCode code="update_payment_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-payment_manager_id"><code>payment_manager_id</code></a>, <a href="#parameter-payment_connector_id"><code>payment_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing payment connector. This operation uses PATCH semantics, so you only need to specify the fields you want to change.</td>
</tr>
<tr>
    <td><a href="#delete_payment_connector"><CopyableCode code="delete_payment_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-payment_manager_id"><code>payment_manager_id</code></a>, <a href="#parameter-payment_connector_id"><code>payment_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a payment connector.</td>
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
<tr id="parameter-payment_connector_id">
    <td><CopyableCode code="payment_connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the payment connector to delete.</td>
</tr>
<tr id="parameter-payment_manager_id">
    <td><CopyableCode code="payment_manager_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the parent payment manager.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_payment_connector"
    values={[
        { label: 'get_payment_connector', value: 'get_payment_connector' },
        { label: 'list_payment_connectors', value: 'list_payment_connectors' }
    ]}
>
<TabItem value="get_payment_connector">

Retrieves information about a specific payment connector.

```sql
SELECT
name,
created_at,
credential_provider_configurations,
description,
last_updated_at,
payment_connector_id,
status,
type_
FROM aws.bedrock_agentcore_control.payment_connectors
WHERE payment_manager_id = '{{ payment_manager_id }}' -- required
AND payment_connector_id = '{{ payment_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_payment_connectors">

Lists all payment connectors for a specified payment manager.

```sql
SELECT
name,
last_updated_at,
payment_connector_id,
status,
type_
FROM aws.bedrock_agentcore_control.payment_connectors
WHERE payment_manager_id = '{{ payment_manager_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_payment_connector"
    values={[
        { label: 'create_payment_connector', value: 'create_payment_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_payment_connector">

Creates a new payment connector for a payment manager. A payment connector integrates with a supported payment provider to enable payment processing capabilities.

```sql
INSERT INTO aws.bedrock_agentcore_control.payment_connectors (
name,
description,
type,
credentialProviderConfigurations,
clientToken,
payment_manager_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ type }}' /* required */,
'{{ credentialProviderConfigurations }}' /* required */,
'{{ clientToken }}',
'{{ payment_manager_id }}',
'{{ region }}'
RETURNING
name,
created_at,
credential_provider_configurations,
payment_connector_id,
payment_manager_id,
status,
type_
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: payment_connectors
  props:
    - name: payment_manager_id
      value: "{{ payment_manager_id }}"
      description: Required parameter for the payment_connectors resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the payment_connectors resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['CoinbaseCDP', 'StripePrivy']
    - name: credentialProviderConfigurations
      value:
        - coinbaseCDP:
            credentialProviderArn: "{{ credentialProviderArn }}"
          stripePrivy:
            credentialProviderArn: "{{ credentialProviderArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_payment_connector"
    values={[
        { label: 'update_payment_connector', value: 'update_payment_connector' }
    ]}
>
<TabItem value="update_payment_connector">

Updates an existing payment connector. This operation uses PATCH semantics, so you only need to specify the fields you want to change.

```sql
UPDATE aws.bedrock_agentcore_control.payment_connectors
SET 
description = '{{ description }}',
type = '{{ type }}',
credentialProviderConfigurations = '{{ credentialProviderConfigurations }}',
clientToken = '{{ clientToken }}'
WHERE 
payment_manager_id = '{{ payment_manager_id }}' --required
AND payment_connector_id = '{{ payment_connector_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
credential_provider_configurations,
last_updated_at,
payment_connector_id,
payment_manager_id,
status,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_payment_connector"
    values={[
        { label: 'delete_payment_connector', value: 'delete_payment_connector' }
    ]}
>
<TabItem value="delete_payment_connector">

Deletes a payment connector.

```sql
DELETE FROM aws.bedrock_agentcore_control.payment_connectors
WHERE payment_manager_id = '{{ payment_manager_id }}' --required
AND payment_connector_id = '{{ payment_connector_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
