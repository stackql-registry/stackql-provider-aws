--- 
title: copy_job_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - copy_job_summaries
  - backup
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

Creates, updates, deletes, gets or lists a <code>copy_job_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="copy_job_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.copy_job_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_copy_job_summaries"
    values={[
        { label: 'list_copy_job_summaries', value: 'list_copy_job_summaries' }
    ]}
>
<TabItem value="list_copy_job_summaries">

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
    <td><CopyableCode code="aggregation_period" /></td>
    <td><code>string</code></td>
    <td>The period for the returned results. ONE_DAY - The daily job count for the prior 14 days. SEVEN_DAYS - The aggregated job count for the prior 7 days. FOURTEEN_DAYS - The aggregated job count for prior 14 days.</td>
</tr>
<tr>
    <td><CopyableCode code="copy_job_summaries" /></td>
    <td><code>array</code></td>
    <td>This return shows a summary that contains Region, Account, State, ResourceType, MessageCategory, StartTime, EndTime, and Count of included jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
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
    <td><a href="#list_copy_job_summaries"><CopyableCode code="list_copy_job_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-State"><code>State</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-MessageCategory"><code>MessageCategory</code></a>, <a href="#parameter-AggregationPeriod"><code>AggregationPeriod</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>This request obtains a list of copy jobs created or running within the the most recent 30 days. You can include parameters AccountID, State, ResourceType, MessageCategory, AggregationPeriod, MaxResults, or NextToken to filter results. This request returns a summary that contains Region, Account, State, RestourceType, MessageCategory, StartTime, EndTime, and Count of included jobs.</td>
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
<tr id="parameter-AccountId">
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>Returns the job count for the specified account. If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned. Root, admin, and delegated administrator accounts can use the value ANY to return job counts from every account in the organization. AGGREGATE_ALL aggregates job counts from all accounts within the authenticated organization, then returns the sum.</td>
</tr>
<tr id="parameter-AggregationPeriod">
    <td><CopyableCode code="AggregationPeriod" /></td>
    <td><code>string</code></td>
    <td>The period for the returned results. ONE_DAY - The daily job count for the prior 14 days. SEVEN_DAYS - The aggregated job count for the prior 7 days. FOURTEEN_DAYS - The aggregated job count for prior 14 days.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>This parameter sets the maximum number of items to be returned. The value is an integer. Range of accepted values is from 1 to 500.</td>
</tr>
<tr id="parameter-MessageCategory">
    <td><CopyableCode code="MessageCategory" /></td>
    <td><code>string</code></td>
    <td>This parameter returns the job count for the specified message category. Example accepted strings include AccessDenied, Success, and InvalidParameters. See Monitoring for a list of accepted MessageCategory strings. The the value ANY returns count of all message categories. AGGREGATE_ALL aggregates job counts for all message categories and returns the sum.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>Returns the job count for the specified resource type. Use request GetSupportedResourceTypes to obtain strings for supported resource types. The the value ANY returns count of all resource types. AGGREGATE_ALL aggregates job counts for all resource types and returns the sum. The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</td>
</tr>
<tr id="parameter-State">
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>This parameter returns the job count for jobs with the specified state. The the value ANY returns count of all states. AGGREGATE_ALL aggregates job counts for all states and returns the sum.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_copy_job_summaries"
    values={[
        { label: 'list_copy_job_summaries', value: 'list_copy_job_summaries' }
    ]}
>
<TabItem value="list_copy_job_summaries">

This request obtains a list of copy jobs created or running within the the most recent 30 days. You can include parameters AccountID, State, ResourceType, MessageCategory, AggregationPeriod, MaxResults, or NextToken to filter results. This request returns a summary that contains Region, Account, State, RestourceType, MessageCategory, StartTime, EndTime, and Count of included jobs.

```sql
SELECT
aggregation_period,
copy_job_summaries,
next_token
FROM aws.backup.copy_job_summaries
WHERE region = '{{ region }}' -- required
AND AccountId = '{{ AccountId }}'
AND State = '{{ State }}'
AND ResourceType = '{{ ResourceType }}'
AND MessageCategory = '{{ MessageCategory }}'
AND AggregationPeriod = '{{ AggregationPeriod }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
