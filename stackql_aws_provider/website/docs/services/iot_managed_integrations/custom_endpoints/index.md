--- 
title: custom_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_endpoints
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>custom_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.custom_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_endpoint"
    values={[
        { label: 'get_custom_endpoint', value: 'get_custom_endpoint' }
    ]}
>
<TabItem value="get_custom_endpoint">

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
    <td><CopyableCode code="EndpointAddress" /></td>
    <td><code>string</code></td>
    <td>The IoT managed integrations dedicated, custom endpoint for the device to route traffic through. (pattern: &lt;code&gt;&#91;A-Za-z0-9._@-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_custom_endpoint"><CopyableCode code="get_custom_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the IoT managed integrations custom endpoint.</td>
</tr>
<tr>
    <td><a href="#register_custom_endpoint"><CopyableCode code="register_custom_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Customers can request IoT managed integrations to manage the server trust for them or bring their own external server trusts for the custom domain. Returns an IoT managed integrations endpoint.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_endpoint"
    values={[
        { label: 'get_custom_endpoint', value: 'get_custom_endpoint' }
    ]}
>
<TabItem value="get_custom_endpoint">

Returns the IoT managed integrations custom endpoint.

```sql
SELECT
EndpointAddress
FROM aws.iot_managed_integrations.custom_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_custom_endpoint"
    values={[
        { label: 'register_custom_endpoint', value: 'register_custom_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_custom_endpoint">

Customers can request IoT managed integrations to manage the server trust for them or bring their own external server trusts for the custom domain. Returns an IoT managed integrations endpoint.

```sql
INSERT INTO aws.iot_managed_integrations.custom_endpoints (
region
)
SELECT 
'{{ region }}'
RETURNING
EndpointAddress
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_endpoints resource.
`}</CodeBlock>

</TabItem>
</Tabs>
