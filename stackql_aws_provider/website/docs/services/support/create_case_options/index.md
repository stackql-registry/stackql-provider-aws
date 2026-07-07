--- 
title: create_case_options
hide_title: false
hide_table_of_contents: false
keywords:
  - create_case_options
  - support
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

Creates, updates, deletes, gets or lists a <code>create_case_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="create_case_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.create_case_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_create_case_options"
    values={[
        { label: 'describe_create_case_options', value: 'describe_create_case_options' }
    ]}
>
<TabItem value="describe_create_case_options">

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
    <td><CopyableCode code="communicationTypes" /></td>
    <td><code>array</code></td>
    <td>A JSON-formatted array that contains the available communication type options, along with the available support timeframes for the given inputs.</td>
</tr>
<tr>
    <td><CopyableCode code="languageAvailability" /></td>
    <td><code>string</code></td>
    <td>Language availability can be any of the following: available best_effort unavailable</td>
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
    <td><a href="#describe_create_case_options"><CopyableCode code="describe_create_case_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of CreateCaseOption types along with the corresponding supported hours and language availability. You can specify the language categoryCode, issueType and serviceCode used to retrieve the CreateCaseOptions. You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.</td>
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
    defaultValue="describe_create_case_options"
    values={[
        { label: 'describe_create_case_options', value: 'describe_create_case_options' }
    ]}
>
<TabItem value="describe_create_case_options">

Returns a list of CreateCaseOption types along with the corresponding supported hours and language availability. You can specify the language categoryCode, issueType and serviceCode used to retrieve the CreateCaseOptions. You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.

```sql
SELECT
communicationTypes,
languageAvailability
FROM aws.support.create_case_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
