--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
  - macie2
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings"
    values={[
        { label: 'get_findings', value: 'get_findings' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="get_findings">

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
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td>An array of objects, one for each finding that matches the criteria specified in the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_findings">

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
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>An array of strings, where each string is the unique identifier for a finding that matches the filter criteria specified in the request.</td>
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
    <td><a href="#get_findings"><CopyableCode code="get_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of one or more findings.</td>
</tr>
<tr>
    <td><a href="#list_findings"><CopyableCode code="list_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a subset of information about one or more findings.</td>
</tr>
<tr>
    <td><a href="#create_sample_findings"><CopyableCode code="create_sample_findings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates sample findings.</td>
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
    defaultValue="get_findings"
    values={[
        { label: 'get_findings', value: 'get_findings' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="get_findings">

Retrieves the details of one or more findings.

```sql
SELECT
findings
FROM aws.macie2.findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_findings">

Retrieves a subset of information about one or more findings.

```sql
SELECT
finding_id
FROM aws.macie2.findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sample_findings"
    values={[
        { label: 'create_sample_findings', value: 'create_sample_findings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sample_findings">

Creates sample findings.

```sql
INSERT INTO aws.macie2.findings (
findingTypes,
region
)
SELECT 
'{{ findingTypes }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: findings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the findings resource.
    - name: findingTypes
      value:
        - "{{ findingTypes }}"
`}</CodeBlock>

</TabItem>
</Tabs>
