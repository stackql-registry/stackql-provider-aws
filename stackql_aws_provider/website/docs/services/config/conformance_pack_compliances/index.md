--- 
title: conformance_pack_compliances
hide_title: false
hide_table_of_contents: false
keywords:
  - conformance_pack_compliances
  - config
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

Creates, updates, deletes, gets or lists a <code>conformance_pack_compliances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conformance_pack_compliances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.conformance_pack_compliances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_conformance_pack_compliance"
    values={[
        { label: 'describe_conformance_pack_compliance', value: 'describe_conformance_pack_compliance' }
    ]}
>
<TabItem value="describe_conformance_pack_compliance">

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
    <td><CopyableCode code="compliance_type" /></td>
    <td><code>string</code></td>
    <td>Compliance of the Config rule. (COMPLIANT, NON_COMPLIANT, INSUFFICIENT_DATA)</td>
</tr>
<tr>
    <td><CopyableCode code="config_rule_name" /></td>
    <td><code>string</code></td>
    <td>Name of the Config rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="controls" /></td>
    <td><code>array</code></td>
    <td>Controls for the conformance pack. A control is a process to prevent or detect problems while meeting objectives. A control can align with a specific compliance regime or map to internal controls defined by an organization.</td>
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
    <td><a href="#describe_conformance_pack_compliance"><CopyableCode code="describe_conformance_pack_compliance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns compliance details for each rule in that conformance pack. You must provide exact rule names.</td>
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
    defaultValue="describe_conformance_pack_compliance"
    values={[
        { label: 'describe_conformance_pack_compliance', value: 'describe_conformance_pack_compliance' }
    ]}
>
<TabItem value="describe_conformance_pack_compliance">

Returns compliance details for each rule in that conformance pack. You must provide exact rule names.

```sql
SELECT
compliance_type,
config_rule_name,
controls
FROM aws.config.conformance_pack_compliances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
