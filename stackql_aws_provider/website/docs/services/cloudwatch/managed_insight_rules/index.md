--- 
title: managed_insight_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_insight_rules
  - cloudwatch
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

Creates, updates, deletes, gets or lists a <code>managed_insight_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_insight_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.managed_insight_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_managed_insight_rules"
    values={[
        { label: 'list_managed_insight_rules', value: 'list_managed_insight_rules' }
    ]}
>
<TabItem value="list_managed_insight_rules">

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
    <td><CopyableCode code="ManagedRules" /></td>
    <td><code>array</code></td>
    <td>The managed rules that are available for the specified Amazon Web Services resource.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Include this value to get the next set of rules if the value was returned by the previous operation.</td>
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
    <td><a href="#list_managed_insight_rules"><CopyableCode code="list_managed_insight_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list that contains the number of managed Contributor Insights rules in your account.</td>
</tr>
<tr>
    <td><a href="#put_managed_insight_rules"><CopyableCode code="put_managed_insight_rules" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ManagedRules"><code>ManagedRules</code></a></td>
    <td></td>
    <td>Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with PutInsightRule. The rules can be enabled, disabled, and deleted using EnableInsightRules, DisableInsightRules, and DeleteInsightRules. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use ListManagedInsightRules to describe all available rules.</td>
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
    defaultValue="list_managed_insight_rules"
    values={[
        { label: 'list_managed_insight_rules', value: 'list_managed_insight_rules' }
    ]}
>
<TabItem value="list_managed_insight_rules">

Returns a list that contains the number of managed Contributor Insights rules in your account.

```sql
SELECT
ManagedRules,
NextToken
FROM aws.cloudwatch.managed_insight_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_managed_insight_rules"
    values={[
        { label: 'put_managed_insight_rules', value: 'put_managed_insight_rules' }
    ]}
>
<TabItem value="put_managed_insight_rules">

Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with PutInsightRule. The rules can be enabled, disabled, and deleted using EnableInsightRules, DisableInsightRules, and DeleteInsightRules. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use ListManagedInsightRules to describe all available rules.

```sql
REPLACE aws.cloudwatch.managed_insight_rules
SET 
ManagedRules = '{{ ManagedRules }}'
WHERE 
region = '{{ region }}' --required
AND ManagedRules = '{{ ManagedRules }}' --required
RETURNING
Failures;
```
</TabItem>
</Tabs>
