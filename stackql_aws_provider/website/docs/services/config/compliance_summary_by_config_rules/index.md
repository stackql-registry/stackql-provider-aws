--- 
title: compliance_summary_by_config_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_summary_by_config_rules
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

Creates, updates, deletes, gets or lists a <code>compliance_summary_by_config_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_summary_by_config_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.compliance_summary_by_config_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compliance_summary_by_config_rule"
    values={[
        { label: 'get_compliance_summary_by_config_rule', value: 'get_compliance_summary_by_config_rule' }
    ]}
>
<TabItem value="get_compliance_summary_by_config_rule">

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
    <td><CopyableCode code="compliance_summary_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that Config created the compliance summary.</td>
</tr>
<tr>
    <td><CopyableCode code="compliant_resource_count" /></td>
    <td><code>object</code></td>
    <td>The number of Config rules or Amazon Web Services resources that are compliant, up to a maximum of 25 for rules and 100 for resources.</td>
</tr>
<tr>
    <td><CopyableCode code="non_compliant_resource_count" /></td>
    <td><code>object</code></td>
    <td>The number of Config rules or Amazon Web Services resources that are noncompliant, up to a maximum of 25 for rules and 100 for resources.</td>
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
    <td><a href="#get_compliance_summary_by_config_rule"><CopyableCode code="get_compliance_summary_by_config_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.</td>
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
    defaultValue="get_compliance_summary_by_config_rule"
    values={[
        { label: 'get_compliance_summary_by_config_rule', value: 'get_compliance_summary_by_config_rule' }
    ]}
>
<TabItem value="get_compliance_summary_by_config_rule">

Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.

```sql
SELECT
compliance_summary_timestamp,
compliant_resource_count,
non_compliant_resource_count
FROM aws.config.compliance_summary_by_config_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
