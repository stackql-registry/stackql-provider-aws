--- 
title: collaboration_privacy_budget_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration_privacy_budget_templates
  - cleanrooms
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

Creates, updates, deletes, gets or lists a <code>collaboration_privacy_budget_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaboration_privacy_budget_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.collaboration_privacy_budget_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_collaboration_privacy_budget_template"
    values={[
        { label: 'get_collaboration_privacy_budget_template', value: 'get_collaboration_privacy_budget_template' },
        { label: 'list_collaboration_privacy_budget_templates', value: 'list_collaboration_privacy_budget_templates' }
    ]}
>
<TabItem value="get_collaboration_privacy_budget_template">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration privacy budget template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the collaboration privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:privacybudgettemplate/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_refresh" /></td>
    <td><code>string</code></td>
    <td>How often the privacy budget refreshes. If you plan to regularly bring new data into the collaboration, use CALENDAR_MONTH to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes. (CALENDAR_MONTH, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the collaboration that includes this collaboration privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that includes this collaboration privacy budget template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the collaboration privacy budget template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the account that created this collaboration privacy budget template. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Specifies the epsilon and noise parameters for the privacy budget template.</td>
</tr>
<tr>
    <td><CopyableCode code="privacy_budget_type" /></td>
    <td><code>string</code></td>
    <td>The type of privacy budget template. (DIFFERENTIAL_PRIVACY, ACCESS_BUDGET)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the collaboration privacy budget template was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaboration_privacy_budget_templates">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration privacy budget template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the collaboration privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:privacybudgettemplate/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the collaboration that contains this collaboration privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains this collaboration privacy budget template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the collaboration privacy budget template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the account that created this collaboration privacy budget template. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="privacy_budget_type" /></td>
    <td><code>string</code></td>
    <td>The type of the privacy budget template. (DIFFERENTIAL_PRIVACY, ACCESS_BUDGET)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the collaboration privacy budget template was updated.</td>
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
    <td><a href="#get_collaboration_privacy_budget_template"><CopyableCode code="get_collaboration_privacy_budget_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-privacy_budget_template_identifier"><code>privacy_budget_template_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a specified privacy budget template.</td>
</tr>
<tr>
    <td><a href="#list_collaboration_privacy_budget_templates"><CopyableCode code="list_collaboration_privacy_budget_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns an array that summarizes each privacy budget template in a specified collaboration.</td>
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
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for one of your collaborations.</td>
</tr>
<tr id="parameter-privacy_budget_template_identifier">
    <td><CopyableCode code="privacy_budget_template_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for one of your privacy budget templates.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_collaboration_privacy_budget_template"
    values={[
        { label: 'get_collaboration_privacy_budget_template', value: 'get_collaboration_privacy_budget_template' },
        { label: 'list_collaboration_privacy_budget_templates', value: 'list_collaboration_privacy_budget_templates' }
    ]}
>
<TabItem value="get_collaboration_privacy_budget_template">

Returns details about a specified privacy budget template.

```sql
SELECT
id,
arn,
auto_refresh,
collaboration_arn,
collaboration_id,
create_time,
creator_account_id,
parameters,
privacy_budget_type,
update_time
FROM aws.cleanrooms.collaboration_privacy_budget_templates
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND privacy_budget_template_identifier = '{{ privacy_budget_template_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_collaboration_privacy_budget_templates">

Returns an array that summarizes each privacy budget template in a specified collaboration.

```sql
SELECT
id,
arn,
collaboration_arn,
collaboration_id,
create_time,
creator_account_id,
privacy_budget_type,
update_time
FROM aws.cleanrooms.collaboration_privacy_budget_templates
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
