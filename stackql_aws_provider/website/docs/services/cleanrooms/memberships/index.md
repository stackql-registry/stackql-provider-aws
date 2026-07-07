--- 
title: memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - memberships
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

Creates, updates, deletes, gets or lists a <code>memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_membership"
    values={[
        { label: 'get_membership', value: 'get_membership' },
        { label: 'list_memberships', value: 'list_memberships' }
    ]}
>
<TabItem value="get_membership">

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
    <td>The unique ID of the membership. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the membership. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the membership's associated collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationCreatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationCreatorDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the collaboration creator. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the membership's collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationName" /></td>
    <td><code>string</code></td>
    <td>The name of the membership's collaboration. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the membership was created.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultJobResultConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains configurations for protected job results.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultResultConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains configurations for protected query results.</td>
</tr>
<tr>
    <td><CopyableCode code="isMetricsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>An indicator as to whether Amazon CloudWatch metrics are enabled for the membership. When true, metrics about query execution are collected in Amazon CloudWatch.</td>
</tr>
<tr>
    <td><CopyableCode code="jobLogStatus" /></td>
    <td><code>string</code></td>
    <td>An indicator as to whether job logging has been enabled or disabled for the collaboration. When ENABLED, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="memberAbilities" /></td>
    <td><code>array</code></td>
    <td>The abilities granted to the collaboration member.</td>
</tr>
<tr>
    <td><CopyableCode code="mlMemberAbilities" /></td>
    <td><code>object</code></td>
    <td>The ML member abilities for a collaboration member.</td>
</tr>
<tr>
    <td><CopyableCode code="paymentConfiguration" /></td>
    <td><code>object</code></td>
    <td>An object representing the payment responsibilities accepted by the collaboration member.</td>
</tr>
<tr>
    <td><CopyableCode code="queryLogStatus" /></td>
    <td><code>string</code></td>
    <td>An indicator as to whether query logging has been enabled or disabled for the membership. When ENABLED, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the membership. (ACTIVE, REMOVED, COLLABORATION_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the membership metadata was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_memberships">

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
    <td>The unique ID for the membership's collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the membership. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the membership's associated collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationCreatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services principal that created the collaboration. Currently only supports Amazon Web Services account ID. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationCreatorDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the collaboration creator. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the membership's collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationName" /></td>
    <td><code>string</code></td>
    <td>The name for the membership's collaboration. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the membership was created.</td>
</tr>
<tr>
    <td><CopyableCode code="memberAbilities" /></td>
    <td><code>array</code></td>
    <td>The abilities granted to the collaboration member.</td>
</tr>
<tr>
    <td><CopyableCode code="mlMemberAbilities" /></td>
    <td><code>object</code></td>
    <td>The ML member abilities for a collaboration member.</td>
</tr>
<tr>
    <td><CopyableCode code="paymentConfiguration" /></td>
    <td><code>object</code></td>
    <td>An object representing the payment responsibilities accepted by the collaboration member.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the membership. (ACTIVE, REMOVED, COLLABORATION_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the membership metadata was last updated.</td>
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
    <td><a href="#get_membership"><CopyableCode code="get_membership" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specified membership for an identifier.</td>
</tr>
<tr>
    <td><a href="#list_memberships"><CopyableCode code="list_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists all memberships resources within the caller's account.</td>
</tr>
<tr>
    <td><a href="#create_membership"><CopyableCode code="create_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-collaborationIdentifier"><code>collaborationIdentifier</code></a>, <a href="#parameter-queryLogStatus"><code>queryLogStatus</code></a></td>
    <td></td>
    <td>Creates a membership for a specific collaboration identifier and joins the collaboration.</td>
</tr>
<tr>
    <td><a href="#update_membership"><CopyableCode code="update_membership" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a membership.</td>
</tr>
<tr>
    <td><a href="#delete_membership"><CopyableCode code="delete_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified membership. All resources under a membership must be deleted.</td>
</tr>
<tr>
    <td><a href="#start_protected_job"><CopyableCode code="start_protected_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-jobParameters"><code>jobParameters</code></a></td>
    <td></td>
    <td>Creates a protected job that is started by Clean Rooms.</td>
</tr>
<tr>
    <td><a href="#start_protected_query"><CopyableCode code="start_protected_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-sqlParameters"><code>sqlParameters</code></a></td>
    <td></td>
    <td>Creates a protected query that is started by Clean Rooms.</td>
</tr>
<tr>
    <td><a href="#preview_privacy_impact"><CopyableCode code="preview_privacy_impact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-parameters"><code>parameters</code></a></td>
    <td></td>
    <td>An estimate of the number of aggregation functions that the member who can query can run given epsilon and noise parameters.</td>
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
    <td>A unique identifier for one of your memberships for a collaboration. Accepts a membership ID.</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A filter which will return only memberships in the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_membership"
    values={[
        { label: 'get_membership', value: 'get_membership' },
        { label: 'list_memberships', value: 'list_memberships' }
    ]}
>
<TabItem value="get_membership">

Retrieves a specified membership for an identifier.

```sql
SELECT
id,
arn,
collaborationArn,
collaborationCreatorAccountId,
collaborationCreatorDisplayName,
collaborationId,
collaborationName,
createTime,
defaultJobResultConfiguration,
defaultResultConfiguration,
isMetricsEnabled,
jobLogStatus,
memberAbilities,
mlMemberAbilities,
paymentConfiguration,
queryLogStatus,
status,
updateTime
FROM aws.cleanrooms.memberships
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_memberships">

Lists all memberships resources within the caller's account.

```sql
SELECT
id,
arn,
collaborationArn,
collaborationCreatorAccountId,
collaborationCreatorDisplayName,
collaborationId,
collaborationName,
createTime,
memberAbilities,
mlMemberAbilities,
paymentConfiguration,
status,
updateTime
FROM aws.cleanrooms.memberships
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_membership"
    values={[
        { label: 'create_membership', value: 'create_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_membership">

Creates a membership for a specific collaboration identifier and joins the collaboration.

```sql
INSERT INTO aws.cleanrooms.memberships (
collaborationIdentifier,
queryLogStatus,
jobLogStatus,
tags,
defaultResultConfiguration,
defaultJobResultConfiguration,
paymentConfiguration,
isMetricsEnabled,
region
)
SELECT 
'{{ collaborationIdentifier }}' /* required */,
'{{ queryLogStatus }}' /* required */,
'{{ jobLogStatus }}',
'{{ tags }}',
'{{ defaultResultConfiguration }}',
'{{ defaultJobResultConfiguration }}',
'{{ paymentConfiguration }}',
{{ isMetricsEnabled }},
'{{ region }}'
RETURNING
membership
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: memberships
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the memberships resource.
    - name: collaborationIdentifier
      value: "{{ collaborationIdentifier }}"
    - name: queryLogStatus
      value: "{{ queryLogStatus }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: jobLogStatus
      value: "{{ jobLogStatus }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
    - name: defaultResultConfiguration
      description: |
        Contains configurations for protected query results.
      value:
        outputConfiguration:
          s3:
            resultFormat: "{{ resultFormat }}"
            bucket: "{{ bucket }}"
            keyPrefix: "{{ keyPrefix }}"
            singleFileOutput: {{ singleFileOutput }}
        roleArn: "{{ roleArn }}"
    - name: defaultJobResultConfiguration
      description: |
        Contains configurations for protected job results.
      value:
        outputConfiguration:
          s3:
            bucket: "{{ bucket }}"
            keyPrefix: "{{ keyPrefix }}"
        roleArn: "{{ roleArn }}"
    - name: paymentConfiguration
      description: |
        An object representing the payment responsibilities accepted by the collaboration member.
      value:
        queryCompute:
          isResponsible: {{ isResponsible }}
        machineLearning:
          modelTraining:
            isResponsible: {{ isResponsible }}
          modelInference:
            isResponsible: {{ isResponsible }}
          syntheticDataGeneration:
            isResponsible: {{ isResponsible }}
        jobCompute:
          isResponsible: {{ isResponsible }}
    - name: isMetricsEnabled
      value: {{ isMetricsEnabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_membership"
    values={[
        { label: 'update_membership', value: 'update_membership' }
    ]}
>
<TabItem value="update_membership">

Updates a membership.

```sql
UPDATE aws.cleanrooms.memberships
SET 
queryLogStatus = '{{ queryLogStatus }}',
jobLogStatus = '{{ jobLogStatus }}',
defaultResultConfiguration = '{{ defaultResultConfiguration }}',
defaultJobResultConfiguration = '{{ defaultJobResultConfiguration }}'
WHERE 
membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
membership;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_membership"
    values={[
        { label: 'delete_membership', value: 'delete_membership' }
    ]}
>
<TabItem value="delete_membership">

Deletes a specified membership. All resources under a membership must be deleted.

```sql
DELETE FROM aws.cleanrooms.memberships
WHERE membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_protected_job"
    values={[
        { label: 'start_protected_job', value: 'start_protected_job' },
        { label: 'start_protected_query', value: 'start_protected_query' },
        { label: 'preview_privacy_impact', value: 'preview_privacy_impact' }
    ]}
>
<TabItem value="start_protected_job">

Creates a protected job that is started by Clean Rooms.

```sql
EXEC aws.cleanrooms.memberships.start_protected_job 
@membership_identifier='{{ membership_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"type": "{{ type }}", 
"jobParameters": "{{ jobParameters }}", 
"resultConfiguration": "{{ resultConfiguration }}", 
"computeConfiguration": "{{ computeConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="start_protected_query">

Creates a protected query that is started by Clean Rooms.

```sql
EXEC aws.cleanrooms.memberships.start_protected_query 
@membership_identifier='{{ membership_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"type": "{{ type }}", 
"sqlParameters": "{{ sqlParameters }}", 
"resultConfiguration": "{{ resultConfiguration }}", 
"computeConfiguration": "{{ computeConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="preview_privacy_impact">

An estimate of the number of aggregation functions that the member who can query can run given epsilon and noise parameters.

```sql
EXEC aws.cleanrooms.memberships.preview_privacy_impact 
@membership_identifier='{{ membership_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"parameters": "{{ parameters }}"
}'
;
```
</TabItem>
</Tabs>
