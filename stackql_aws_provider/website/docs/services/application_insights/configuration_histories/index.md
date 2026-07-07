--- 
title: configuration_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_histories
  - application_insights
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

Creates, updates, deletes, gets or lists a <code>configuration_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_insights.configuration_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_configuration_history"
    values={[
        { label: 'list_configuration_history', value: 'list_configuration_history' }
    ]}
>
<TabItem value="list_configuration_history">

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
    <td><CopyableCode code="EventList" /></td>
    <td><code>array</code></td>
    <td>The list of configuration events and their corresponding details.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The NextToken value to include in a future ListConfigurationHistory request. When the results of a ListConfigurationHistory request exceed MaxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#list_configuration_history"><CopyableCode code="list_configuration_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: INFO: creating a new alarm or updating an alarm threshold. WARN: alarm not created due to insufficient data points used to predict thresholds. ERROR: alarm not created due to permission errors or exceeding quotas.</td>
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
    defaultValue="list_configuration_history"
    values={[
        { label: 'list_configuration_history', value: 'list_configuration_history' }
    ]}
>
<TabItem value="list_configuration_history">

Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: INFO: creating a new alarm or updating an alarm threshold. WARN: alarm not created due to insufficient data points used to predict thresholds. ERROR: alarm not created due to permission errors or exceeding quotas.

```sql
SELECT
EventList,
NextToken
FROM aws.application_insights.configuration_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
