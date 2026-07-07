--- 
title: human_readable_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - human_readable_summaries
  - iam
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

Creates, updates, deletes, gets or lists a <code>human_readable_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="human_readable_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.human_readable_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_human_readable_summary"
    values={[
        { label: 'get_human_readable_summary', value: 'get_human_readable_summary' }
    ]}
>
<TabItem value="get_human_readable_summary">

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
    <td><CopyableCode code="Locale" /></td>
    <td><code>string</code></td>
    <td>The locale that this response was generated for. This maps to the input locale.</td>
</tr>
<tr>
    <td><CopyableCode code="SummaryContent" /></td>
    <td><code>string</code></td>
    <td>Summary content in the specified locale. Summary content is non-empty only if the SummaryState is AVAILABLE.</td>
</tr>
<tr>
    <td><CopyableCode code="SummaryState" /></td>
    <td><code>string</code></td>
    <td>State of summary generation. This generation process is asynchronous and this attribute indicates the state of the generation process.</td>
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
    <td><a href="#get_human_readable_summary"><CopyableCode code="get_human_readable_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-EntityArn"><code>EntityArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Locale"><code>Locale</code></a></td>
    <td>Retrieves a human readable summary for a given entity. At this time, the only supported entity type is delegation-request This method uses a Large Language Model (LLM) to generate the summary. If a delegation request has no owner or owner account, GetHumanReadableSummary for that delegation request can be called by any account. If the owner account is assigned but there is no owner id, only identities within that owner account can call GetHumanReadableSummary for the delegation request to retrieve a summary of that request. Once the delegation request is fully owned, the owner of the request gets a default permission to get that delegation request. For more details, read default permissions granted to delegation requests. These rules are identical to GetDelegationRequest API behavior, such that a party who has permissions to call GetDelegationRequest for a given delegation request will always be able to retrieve the human readable summary for that request.</td>
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
<tr id="parameter-EntityArn">
    <td><CopyableCode code="EntityArn" /></td>
    <td><code>string</code></td>
    <td>Arn of the entity to be summarized. At this time, the only supported entity type is delegation-request</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Locale">
    <td><CopyableCode code="Locale" /></td>
    <td><code>string</code></td>
    <td>A string representing the locale to use for the summary generation. The supported locale strings are based on the Supported languages of the Amazon Web Services Management Console .</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_human_readable_summary"
    values={[
        { label: 'get_human_readable_summary', value: 'get_human_readable_summary' }
    ]}
>
<TabItem value="get_human_readable_summary">

Retrieves a human readable summary for a given entity. At this time, the only supported entity type is delegation-request This method uses a Large Language Model (LLM) to generate the summary. If a delegation request has no owner or owner account, GetHumanReadableSummary for that delegation request can be called by any account. If the owner account is assigned but there is no owner id, only identities within that owner account can call GetHumanReadableSummary for the delegation request to retrieve a summary of that request. Once the delegation request is fully owned, the owner of the request gets a default permission to get that delegation request. For more details, read default permissions granted to delegation requests. These rules are identical to GetDelegationRequest API behavior, such that a party who has permissions to call GetDelegationRequest for a given delegation request will always be able to retrieve the human readable summary for that request.

```sql
SELECT
Locale,
SummaryContent,
SummaryState
FROM aws.iam.human_readable_summaries
WHERE EntityArn = '{{ EntityArn }}' -- required
AND region = '{{ region }}' -- required
AND Locale = '{{ Locale }}'
;
```
</TabItem>
</Tabs>
