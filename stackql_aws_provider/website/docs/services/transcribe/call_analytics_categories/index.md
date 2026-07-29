--- 
title: call_analytics_categories
hide_title: false
hide_table_of_contents: false
keywords:
  - call_analytics_categories
  - transcribe
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

Creates, updates, deletes, gets or lists a <code>call_analytics_categories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="call_analytics_categories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transcribe.call_analytics_categories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_call_analytics_category"
    values={[
        { label: 'get_call_analytics_category', value: 'get_call_analytics_category' },
        { label: 'list_call_analytics_categories', value: 'list_call_analytics_categories' }
    ]}
>
<TabItem value="get_call_analytics_category">

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
    <td><CopyableCode code="category_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Call Analytics category. Category names are case sensitive and must be unique within an Amazon Web Services account. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified Call Analytics category was created. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="input_type" /></td>
    <td><code>string</code></td>
    <td>The input type associated with the specified category. POST_CALL refers to a category that is applied to batch transcriptions; REAL_TIME refers to a category that is applied to streaming transcriptions. (REAL_TIME, POST_CALL)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified Call Analytics category was last updated. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-05T12:45:32.691000-07:00 represents 12:45 PM UTC-7 on May 5, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The rules used to define a Call Analytics category. Each category can have between 1 and 20 rules.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags, each in the form of a key:value pair, assigned to the specified call analytics category.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_call_analytics_categories">

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
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Provides detailed information about your Call Analytics categories, including all the rules associated with each category.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If NextToken is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the NextToken parameter in your results output, then run your request again including NextToken with the value of the copied string. Repeat as needed to view all your results. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#get_call_analytics_category"><CopyableCode code="get_call_analytics_category" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the specified Call Analytics category. To get a list of your Call Analytics categories, use the operation.</td>
</tr>
<tr>
    <td><a href="#list_call_analytics_categories"><CopyableCode code="list_call_analytics_categories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed information about a specific Call Analytics category, use the operation.</td>
</tr>
<tr>
    <td><a href="#create_call_analytics_category"><CopyableCode code="create_call_analytics_category" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CategoryName"><code>CategoryName</code></a>, <a href="#parameter-Rules"><code>Rules</code></a></td>
    <td></td>
    <td>Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively. When creating a new category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category. POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL category by default. Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions.</td>
</tr>
<tr>
    <td><a href="#update_call_analytics_category"><CopyableCode code="update_call_analytics_category" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CategoryName"><code>CategoryName</code></a>, <a href="#parameter-Rules"><code>Rules</code></a></td>
    <td></td>
    <td>Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category. To create a new category, see .</td>
</tr>
<tr>
    <td><a href="#delete_call_analytics_category"><CopyableCode code="delete_call_analytics_category" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using CategoryName. Category names are case sensitive.</td>
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
    defaultValue="get_call_analytics_category"
    values={[
        { label: 'get_call_analytics_category', value: 'get_call_analytics_category' },
        { label: 'list_call_analytics_categories', value: 'list_call_analytics_categories' }
    ]}
>
<TabItem value="get_call_analytics_category">

Provides information about the specified Call Analytics category. To get a list of your Call Analytics categories, use the operation.

```sql
SELECT
category_name,
create_time,
input_type,
last_update_time,
rules,
tags
FROM aws.transcribe.call_analytics_categories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_call_analytics_categories">

Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed information about a specific Call Analytics category, use the operation.

```sql
SELECT
categories,
next_token
FROM aws.transcribe.call_analytics_categories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_call_analytics_category"
    values={[
        { label: 'create_call_analytics_category', value: 'create_call_analytics_category' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_call_analytics_category">

Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively. When creating a new category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category. POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL category by default. Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions.

```sql
INSERT INTO aws.transcribe.call_analytics_categories (
CategoryName,
Rules,
Tags,
InputType,
region
)
SELECT 
'{{ CategoryName }}' /* required */,
'{{ Rules }}' /* required */,
'{{ Tags }}',
'{{ InputType }}',
'{{ region }}'
RETURNING
category_properties
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: call_analytics_categories
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the call_analytics_categories resource.
    - name: CategoryName
      value: "{{ CategoryName }}"
      description: |
        A unique name, chosen by you, for your Call Analytics category. It's helpful to use a detailed naming system that will make sense to you in the future. For example, it's better to use sentiment-positive-last30seconds for a category over a generic name like test-category. Category names are case sensitive.
    - name: Rules
      description: |
        Rules define a Call Analytics category. When creating a new category, you must create between 1 and 20 rules for that category. For each rule, you specify a filter you want applied to the attributes of a call. For example, you can choose a sentiment filter that detects if a customer's sentiment was positive during the last 30 seconds of the call.
      value:
        - NonTalkTimeFilter:
            Threshold: {{ Threshold }}
            AbsoluteTimeRange:
              StartTime: {{ StartTime }}
              EndTime: {{ EndTime }}
              First: {{ First }}
              Last: {{ Last }}
            RelativeTimeRange:
              StartPercentage: {{ StartPercentage }}
              EndPercentage: {{ EndPercentage }}
              First: {{ First }}
              Last: {{ Last }}
            Negate: {{ Negate }}
          InterruptionFilter:
            Threshold: {{ Threshold }}
            ParticipantRole: "{{ ParticipantRole }}"
            AbsoluteTimeRange:
              StartTime: {{ StartTime }}
              EndTime: {{ EndTime }}
              First: {{ First }}
              Last: {{ Last }}
            RelativeTimeRange:
              StartPercentage: {{ StartPercentage }}
              EndPercentage: {{ EndPercentage }}
              First: {{ First }}
              Last: {{ Last }}
            Negate: {{ Negate }}
          TranscriptFilter:
            TranscriptFilterType: "{{ TranscriptFilterType }}"
            AbsoluteTimeRange:
              StartTime: {{ StartTime }}
              EndTime: {{ EndTime }}
              First: {{ First }}
              Last: {{ Last }}
            RelativeTimeRange:
              StartPercentage: {{ StartPercentage }}
              EndPercentage: {{ EndPercentage }}
              First: {{ First }}
              Last: {{ Last }}
            ParticipantRole: "{{ ParticipantRole }}"
            Negate: {{ Negate }}
            Targets:
              - "{{ Targets }}"
          SentimentFilter:
            Sentiments:
              - "{{ Sentiments }}"
            AbsoluteTimeRange:
              StartTime: {{ StartTime }}
              EndTime: {{ EndTime }}
              First: {{ First }}
              Last: {{ Last }}
            RelativeTimeRange:
              StartPercentage: {{ StartPercentage }}
              EndPercentage: {{ EndPercentage }}
              First: {{ First }}
              Last: {{ Last }}
            ParticipantRole: "{{ ParticipantRole }}"
            Negate: {{ Negate }}
    - name: Tags
      description: |
        Adds one or more custom tags, each in the form of a key:value pair, to a new call analytics category at the time you start this new job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: InputType
      value: "{{ InputType }}"
      description: |
        Choose whether you want to create a real-time or a post-call category for your Call Analytics transcription. Specifying POST_CALL assigns your category to post-call transcriptions; categories with this input type cannot be applied to streaming (real-time) transcriptions. Specifying REAL_TIME assigns your category to streaming transcriptions; categories with this input type cannot be applied to post-call transcriptions. If you do not include InputType, your category is created as a post-call category by default.
      valid_values: ['REAL_TIME', 'POST_CALL']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_call_analytics_category"
    values={[
        { label: 'update_call_analytics_category', value: 'update_call_analytics_category' }
    ]}
>
<TabItem value="update_call_analytics_category">

Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category. To create a new category, see .

```sql
UPDATE aws.transcribe.call_analytics_categories
SET 
CategoryName = '{{ CategoryName }}',
Rules = '{{ Rules }}',
InputType = '{{ InputType }}'
WHERE 
region = '{{ region }}' --required
AND CategoryName = '{{ CategoryName }}' --required
AND Rules = '{{ Rules }}' --required
RETURNING
category_properties;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_call_analytics_category"
    values={[
        { label: 'delete_call_analytics_category', value: 'delete_call_analytics_category' }
    ]}
>
<TabItem value="delete_call_analytics_category">

Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using CategoryName. Category names are case sensitive.

```sql
DELETE FROM aws.transcribe.call_analytics_categories
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
