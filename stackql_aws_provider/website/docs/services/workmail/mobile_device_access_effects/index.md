--- 
title: mobile_device_access_effects
hide_title: false
hide_table_of_contents: false
keywords:
  - mobile_device_access_effects
  - workmail
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

Creates, updates, deletes, gets or lists a <code>mobile_device_access_effects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mobile_device_access_effects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.mobile_device_access_effects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mobile_device_access_effect"
    values={[
        { label: 'get_mobile_device_access_effect', value: 'get_mobile_device_access_effect' }
    ]}
>
<TabItem value="get_mobile_device_access_effect">

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
    <td><CopyableCode code="Effect" /></td>
    <td><code>string</code></td>
    <td>The effect of the simulated access, ALLOW or DENY, after evaluating mobile device access rules in the WorkMail organization for the simulated user parameters. (ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="MatchedRules" /></td>
    <td><code>array</code></td>
    <td>A list of the rules which matched the simulated user input and produced the effect.</td>
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
    <td><a href="#get_mobile_device_access_effect"><CopyableCode code="get_mobile_device_access_effect" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.</td>
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
    defaultValue="get_mobile_device_access_effect"
    values={[
        { label: 'get_mobile_device_access_effect', value: 'get_mobile_device_access_effect' }
    ]}
>
<TabItem value="get_mobile_device_access_effect">

Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.

```sql
SELECT
Effect,
MatchedRules
FROM aws.workmail.mobile_device_access_effects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
