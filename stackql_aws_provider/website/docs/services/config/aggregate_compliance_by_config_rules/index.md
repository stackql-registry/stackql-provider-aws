--- 
title: aggregate_compliance_by_config_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregate_compliance_by_config_rules
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

Creates, updates, deletes, gets or lists an <code>aggregate_compliance_by_config_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aggregate_compliance_by_config_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.aggregate_compliance_by_config_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_aggregate_compliance_by_config_rules"
    values={[
        { label: 'describe_aggregate_compliance_by_config_rules', value: 'describe_aggregate_compliance_by_config_rules' }
    ]}
>
<TabItem value="describe_aggregate_compliance_by_config_rules">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account ID of the source account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AwsRegion" /></td>
    <td><code>string</code></td>
    <td>The source region from where the data is aggregated.</td>
</tr>
<tr>
    <td><CopyableCode code="Compliance" /></td>
    <td><code>object</code></td>
    <td>Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigRuleName" /></td>
    <td><code>string</code></td>
    <td>The name of the Config rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_aggregate_compliance_by_config_rules"><CopyableCode code="describe_aggregate_compliance_by_config_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</td>
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
    defaultValue="describe_aggregate_compliance_by_config_rules"
    values={[
        { label: 'describe_aggregate_compliance_by_config_rules', value: 'describe_aggregate_compliance_by_config_rules' }
    ]}
>
<TabItem value="describe_aggregate_compliance_by_config_rules">

Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.

```sql
SELECT
AccountId,
AwsRegion,
Compliance,
ConfigRuleName
FROM aws.config.aggregate_compliance_by_config_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
