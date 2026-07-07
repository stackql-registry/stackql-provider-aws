--- 
title: privacy_budget_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - privacy_budget_templates
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

Creates, updates, deletes, gets or lists a <code>privacy_budget_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="privacy_budget_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.privacy_budget_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_privacy_budget_template"
    values={[
        { label: 'get_privacy_budget_template', value: 'get_privacy_budget_template' },
        { label: 'list_privacy_budget_templates', value: 'list_privacy_budget_templates' }
    ]}
>
<TabItem value="get_privacy_budget_template">

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
    <td>The unique identifier of the privacy budget template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:privacybudgettemplate/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRefresh" /></td>
    <td><code>string</code></td>
    <td>How often the privacy budget refreshes. If you plan to regularly bring new data into the collaboration, use CALENDAR_MONTH to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes. (CALENDAR_MONTH, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the collaboration that contains this privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the collaboration that contains this privacy budget template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the privacy budget template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="membershipArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the member who created the privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a membership resource. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Specifies the epsilon and noise parameters for the privacy budget template.</td>
</tr>
<tr>
    <td><CopyableCode code="privacyBudgetType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of the privacy budget template. (DIFFERENTIAL_PRIVACY, ACCESS_BUDGET)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the privacy budget template was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_privacy_budget_templates">

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
    <td>The unique identifier of the privacy budget template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:privacybudgettemplate/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the collaboration that contains this privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the collaboration that contains this privacy budget template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the privacy budget template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="membershipArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the member who created the privacy budget template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a membership resource. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="privacyBudgetType" /></td>
    <td><code>string</code></td>
    <td>The type of the privacy budget template. (DIFFERENTIAL_PRIVACY, ACCESS_BUDGET)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the privacy budget template was updated.</td>
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
    <td><a href="#get_privacy_budget_template"><CopyableCode code="get_privacy_budget_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-privacy_budget_template_identifier"><code>privacy_budget_template_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for a specified privacy budget template.</td>
</tr>
<tr>
    <td><a href="#list_privacy_budget_templates"><CopyableCode code="list_privacy_budget_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns detailed information about the privacy budget templates in a specified membership.</td>
</tr>
<tr>
    <td><a href="#create_privacy_budget_template"><CopyableCode code="create_privacy_budget_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-privacyBudgetType"><code>privacyBudgetType</code></a>, <a href="#parameter-parameters"><code>parameters</code></a></td>
    <td></td>
    <td>Creates a privacy budget template for a specified collaboration. Each collaboration can have only one privacy budget template. If you need to change the privacy budget template, use the UpdatePrivacyBudgetTemplate operation.</td>
</tr>
<tr>
    <td><a href="#update_privacy_budget_template"><CopyableCode code="update_privacy_budget_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-privacy_budget_template_identifier"><code>privacy_budget_template_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-privacyBudgetType"><code>privacyBudgetType</code></a></td>
    <td></td>
    <td>Updates the privacy budget template for the specified collaboration.</td>
</tr>
<tr>
    <td><a href="#delete_privacy_budget_template"><CopyableCode code="delete_privacy_budget_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-privacy_budget_template_identifier"><code>privacy_budget_template_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a privacy budget template for a specified collaboration.</td>
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
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for one of your memberships for a collaboration. The privacy budget template is deleted from the collaboration that this membership belongs to. Accepts a membership ID.</td>
</tr>
<tr id="parameter-privacy_budget_template_identifier">
    <td><CopyableCode code="privacy_budget_template_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for your privacy budget template.</td>
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
    defaultValue="get_privacy_budget_template"
    values={[
        { label: 'get_privacy_budget_template', value: 'get_privacy_budget_template' },
        { label: 'list_privacy_budget_templates', value: 'list_privacy_budget_templates' }
    ]}
>
<TabItem value="get_privacy_budget_template">

Returns details for a specified privacy budget template.

```sql
SELECT
id,
arn,
autoRefresh,
collaborationArn,
collaborationId,
createTime,
membershipArn,
membershipId,
parameters,
privacyBudgetType,
updateTime
FROM aws.cleanrooms.privacy_budget_templates
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND privacy_budget_template_identifier = '{{ privacy_budget_template_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_privacy_budget_templates">

Returns detailed information about the privacy budget templates in a specified membership.

```sql
SELECT
id,
arn,
collaborationArn,
collaborationId,
createTime,
membershipArn,
membershipId,
privacyBudgetType,
updateTime
FROM aws.cleanrooms.privacy_budget_templates
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_privacy_budget_template"
    values={[
        { label: 'create_privacy_budget_template', value: 'create_privacy_budget_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_privacy_budget_template">

Creates a privacy budget template for a specified collaboration. Each collaboration can have only one privacy budget template. If you need to change the privacy budget template, use the UpdatePrivacyBudgetTemplate operation.

```sql
INSERT INTO aws.cleanrooms.privacy_budget_templates (
autoRefresh,
privacyBudgetType,
parameters,
tags,
membership_identifier,
region
)
SELECT 
'{{ autoRefresh }}',
'{{ privacyBudgetType }}' /* required */,
'{{ parameters }}' /* required */,
'{{ tags }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
privacyBudgetTemplate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: privacy_budget_templates
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the privacy_budget_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the privacy_budget_templates resource.
    - name: autoRefresh
      value: "{{ autoRefresh }}"
      valid_values: ['CALENDAR_MONTH', 'NONE']
    - name: privacyBudgetType
      value: "{{ privacyBudgetType }}"
      valid_values: ['DIFFERENTIAL_PRIVACY', 'ACCESS_BUDGET']
    - name: parameters
      description: |
        The epsilon and noise parameters that you want to use for the privacy budget template.
      value:
        differentialPrivacy:
          epsilon: {{ epsilon }}
          usersNoisePerQuery: {{ usersNoisePerQuery }}
        accessBudget:
          budgetParameters:
            - type_: "{{ type_ }}"
              budget: {{ budget }}
              autoRefresh: "{{ autoRefresh }}"
          resourceArn: "{{ resourceArn }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_privacy_budget_template"
    values={[
        { label: 'update_privacy_budget_template', value: 'update_privacy_budget_template' }
    ]}
>
<TabItem value="update_privacy_budget_template">

Updates the privacy budget template for the specified collaboration.

```sql
UPDATE aws.cleanrooms.privacy_budget_templates
SET 
privacyBudgetType = '{{ privacyBudgetType }}',
parameters = '{{ parameters }}'
WHERE 
membership_identifier = '{{ membership_identifier }}' --required
AND privacy_budget_template_identifier = '{{ privacy_budget_template_identifier }}' --required
AND region = '{{ region }}' --required
AND privacyBudgetType = '{{ privacyBudgetType }}' --required
RETURNING
privacyBudgetTemplate;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_privacy_budget_template"
    values={[
        { label: 'delete_privacy_budget_template', value: 'delete_privacy_budget_template' }
    ]}
>
<TabItem value="delete_privacy_budget_template">

Deletes a privacy budget template for a specified collaboration.

```sql
DELETE FROM aws.cleanrooms.privacy_budget_templates
WHERE membership_identifier = '{{ membership_identifier }}' --required
AND privacy_budget_template_identifier = '{{ privacy_budget_template_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
