--- 
title: return_shipping_labels
hide_title: false
hide_table_of_contents: false
keywords:
  - return_shipping_labels
  - snowball
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

Creates, updates, deletes, gets or lists a <code>return_shipping_labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="return_shipping_labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snowball.return_shipping_labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_return_shipping_label"
    values={[
        { label: 'describe_return_shipping_label', value: 'describe_return_shipping_label' }
    ]}
>
<TabItem value="describe_return_shipping_label">

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
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date of the current return shipping label.</td>
</tr>
<tr>
    <td><CopyableCode code="return_shipping_label_uri" /></td>
    <td><code>string</code></td>
    <td>The pre-signed Amazon S3 URI used to download the return shipping label. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status information of the task on a Snow device that is being returned to Amazon Web Services. (InProgress, TimedOut, Succeeded, Failed)</td>
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
    <td><a href="#describe_return_shipping_label"><CopyableCode code="describe_return_shipping_label" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Information on the shipping label of a Snow device that is being returned to Amazon Web Services.</td>
</tr>
<tr>
    <td><a href="#create_return_shipping_label"><CopyableCode code="create_return_shipping_label" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobId"><code>JobId</code></a></td>
    <td></td>
    <td>Creates a shipping label that will be used to return the Snow device to Amazon Web Services.</td>
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
    defaultValue="describe_return_shipping_label"
    values={[
        { label: 'describe_return_shipping_label', value: 'describe_return_shipping_label' }
    ]}
>
<TabItem value="describe_return_shipping_label">

Information on the shipping label of a Snow device that is being returned to Amazon Web Services.

```sql
SELECT
expiration_date,
return_shipping_label_uri,
status
FROM aws.snowball.return_shipping_labels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_return_shipping_label"
    values={[
        { label: 'create_return_shipping_label', value: 'create_return_shipping_label' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_return_shipping_label">

Creates a shipping label that will be used to return the Snow device to Amazon Web Services.

```sql
INSERT INTO aws.snowball.return_shipping_labels (
JobId,
ShippingOption,
region
)
SELECT 
'{{ JobId }}' /* required */,
'{{ ShippingOption }}',
'{{ region }}'
RETURNING
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: return_shipping_labels
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the return_shipping_labels resource.
    - name: JobId
      value: "{{ JobId }}"
      description: |
        The ID for a job that you want to create the return shipping label for; for example, JID123e4567-e89b-12d3-a456-426655440000.
    - name: ShippingOption
      value: "{{ ShippingOption }}"
      description: |
        The shipping speed for a particular job. This speed doesn't dictate how soon the device is returned to Amazon Web Services. This speed represents how quickly it moves to its destination while in transit. Regional shipping speeds are as follows:
      valid_values: ['SECOND_DAY', 'NEXT_DAY', 'EXPRESS', 'STANDARD']
`}</CodeBlock>

</TabItem>
</Tabs>
