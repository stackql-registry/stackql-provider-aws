--- 
title: support_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - support_cases
  - service_quotas
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

Creates, updates, deletes, gets or lists a <code>support_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="support_cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.support_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_support_case"><CopyableCode code="create_support_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RequestId"><code>RequestId</code></a></td>
    <td></td>
    <td>Creates a Support case for an existing quota increase request. This call only creates a Support case if the request has a Pending status.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_support_case"
    values={[
        { label: 'create_support_case', value: 'create_support_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_support_case">

Creates a Support case for an existing quota increase request. This call only creates a Support case if the request has a Pending status.

```sql
INSERT INTO aws.service_quotas.support_cases (
RequestId,
region
)
SELECT 
'{{ RequestId }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: support_cases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the support_cases resource.
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        The ID of the pending quota increase request for which you want to open a Support case.
`}</CodeBlock>

</TabItem>
</Tabs>
