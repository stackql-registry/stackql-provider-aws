--- 
title: collaborations
hide_title: false
hide_table_of_contents: false
keywords:
  - collaborations
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

Creates, updates, deletes, gets or lists a <code>collaborations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaborations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.collaborations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_collaboration"
    values={[
        { label: 'get_collaboration', value: 'get_collaboration' },
        { label: 'list_collaborations', value: 'list_collaborations' }
    ]}
>
<TabItem value="get_collaboration">

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
    <td>The unique ID for the collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable identifier provided by the collaboration owner. Display names are not unique. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_result_regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Regions where collaboration query results can be stored. Returns the list of Region identifiers that were specified when the collaboration was created. This list is used to enforce regional storage policies and compliance requirements.</td>
</tr>
<tr>
    <td><CopyableCode code="analytics_engine" /></td>
    <td><code>string</code></td>
    <td>The analytics engine for the collaboration. After July 16, 2025, the CLEAN_ROOMS_SQL parameter will no longer be available. (SPARK, CLEAN_ROOMS_SQL)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_approved_change_types" /></td>
    <td><code>array</code></td>
    <td>The types of change requests that are automatically approved for this collaboration.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the collaboration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creator_display_name" /></td>
    <td><code>string</code></td>
    <td>A display name of the collaboration creator. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_encryption_metadata" /></td>
    <td><code>object</code></td>
    <td>The settings for client-side encryption for cryptographic computing.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the collaboration provided by the collaboration owner. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_metrics_enabled" /></td>
    <td><code>boolean</code></td>
    <td>An indicator as to whether metrics are enabled for the collaboration. When true, collaboration members can opt in to Amazon CloudWatch metrics for their membership queries.</td>
</tr>
<tr>
    <td><CopyableCode code="job_log_status" /></td>
    <td><code>string</code></td>
    <td>An indicator as to whether job logging has been enabled or disabled for the collaboration. When ENABLED, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="member_status" /></td>
    <td><code>string</code></td>
    <td>The status of a member in a collaboration. (INVITED, ACTIVE, LEFT, REMOVED)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for your membership within the collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for your membership within the collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_log_status" /></td>
    <td><code>string</code></td>
    <td>An indicator as to whether query logging has been enabled or disabled for the collaboration. When ENABLED, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the collaboration metadata was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaborations">

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
    <td>The identifier for the collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A human-readable identifier provided by the collaboration owner. Display names are not unique. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analytics_engine" /></td>
    <td><code>string</code></td>
    <td>The analytics engine. After July 16, 2025, the CLEAN_ROOMS_SQL parameter will no longer be available. (SPARK, CLEAN_ROOMS_SQL)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the collaboration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creator_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the collaboration creator. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="member_status" /></td>
    <td><code>string</code></td>
    <td>The status of a member in a collaboration. (INVITED, ACTIVE, LEFT, REMOVED)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a member in a collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a member in a collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the collaboration metadata was last updated.</td>
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
    <td><a href="#get_collaboration"><CopyableCode code="get_collaboration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata about a collaboration.</td>
</tr>
<tr>
    <td><a href="#list_collaborations"><CopyableCode code="list_collaborations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-memberStatus"><code>memberStatus</code></a></td>
    <td>Lists collaborations the caller owns, is active in, or has been invited to.</td>
</tr>
<tr>
    <td><a href="#create_collaboration"><CopyableCode code="create_collaboration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-members"><code>members</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-creatorMemberAbilities"><code>creatorMemberAbilities</code></a>, <a href="#parameter-creatorDisplayName"><code>creatorDisplayName</code></a>, <a href="#parameter-queryLogStatus"><code>queryLogStatus</code></a></td>
    <td></td>
    <td>Creates a new collaboration.</td>
</tr>
<tr>
    <td><a href="#update_collaboration"><CopyableCode code="update_collaboration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates collaboration metadata and can only be called by the collaboration owner.</td>
</tr>
<tr>
    <td><a href="#delete_collaboration"><CopyableCode code="delete_collaboration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a collaboration. It can only be called by the collaboration owner.</td>
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
    <td>The identifier for the collaboration.</td>
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
<tr id="parameter-memberStatus">
    <td><CopyableCode code="memberStatus" /></td>
    <td><code>string</code></td>
    <td>The caller's status in a collaboration.</td>
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
    defaultValue="get_collaboration"
    values={[
        { label: 'get_collaboration', value: 'get_collaboration' },
        { label: 'list_collaborations', value: 'list_collaborations' }
    ]}
>
<TabItem value="get_collaboration">

Returns metadata about a collaboration.

```sql
SELECT
id,
name,
allowed_result_regions,
analytics_engine,
arn,
auto_approved_change_types,
create_time,
creator_account_id,
creator_display_name,
data_encryption_metadata,
description,
is_metrics_enabled,
job_log_status,
member_status,
membership_arn,
membership_id,
query_log_status,
update_time
FROM aws.cleanrooms.collaborations
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_collaborations">

Lists collaborations the caller owns, is active in, or has been invited to.

```sql
SELECT
id,
name,
analytics_engine,
arn,
create_time,
creator_account_id,
creator_display_name,
member_status,
membership_arn,
membership_id,
update_time
FROM aws.cleanrooms.collaborations
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND memberStatus = '{{ memberStatus }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_collaboration"
    values={[
        { label: 'create_collaboration', value: 'create_collaboration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_collaboration">

Creates a new collaboration.

```sql
INSERT INTO aws.cleanrooms.collaborations (
members,
name,
description,
creatorMemberAbilities,
creatorMLMemberAbilities,
creatorDisplayName,
dataEncryptionMetadata,
queryLogStatus,
jobLogStatus,
tags,
creatorPaymentConfiguration,
analyticsEngine,
autoApprovedChangeRequestTypes,
allowedResultRegions,
isMetricsEnabled,
region
)
SELECT 
'{{ members }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}' /* required */,
'{{ creatorMemberAbilities }}' /* required */,
'{{ creatorMLMemberAbilities }}',
'{{ creatorDisplayName }}' /* required */,
'{{ dataEncryptionMetadata }}',
'{{ queryLogStatus }}' /* required */,
'{{ jobLogStatus }}',
'{{ tags }}',
'{{ creatorPaymentConfiguration }}',
'{{ analyticsEngine }}',
'{{ autoApprovedChangeRequestTypes }}',
'{{ allowedResultRegions }}',
{{ isMetricsEnabled }},
'{{ region }}'
RETURNING
collaboration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: collaborations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the collaborations resource.
    - name: members
      value:
        - accountId: "{{ accountId }}"
          memberAbilities: "{{ memberAbilities }}"
          mlMemberAbilities:
            customMLMemberAbilities:
              - "{{ customMLMemberAbilities }}"
          displayName: "{{ displayName }}"
          paymentConfiguration:
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
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: creatorMemberAbilities
      value:
        - "{{ creatorMemberAbilities }}"
    - name: creatorMLMemberAbilities
      description: |
        The ML member abilities for a collaboration member.
      value:
        customMLMemberAbilities:
          - "{{ customMLMemberAbilities }}"
    - name: creatorDisplayName
      value: "{{ creatorDisplayName }}"
    - name: dataEncryptionMetadata
      description: |
        The settings for client-side encryption for cryptographic computing.
      value:
        allowCleartext: {{ allowCleartext }}
        allowDuplicates: {{ allowDuplicates }}
        allowJoinsOnColumnsWithDifferentNames: {{ allowJoinsOnColumnsWithDifferentNames }}
        preserveNulls: {{ preserveNulls }}
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
    - name: creatorPaymentConfiguration
      description: |
        An object representing the collaboration member's payment responsibilities set by the collaboration creator.
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
    - name: analyticsEngine
      value: "{{ analyticsEngine }}"
      valid_values: ['SPARK', 'CLEAN_ROOMS_SQL']
    - name: autoApprovedChangeRequestTypes
      value:
        - "{{ autoApprovedChangeRequestTypes }}"
    - name: allowedResultRegions
      value:
        - "{{ allowedResultRegions }}"
    - name: isMetricsEnabled
      value: {{ isMetricsEnabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_collaboration"
    values={[
        { label: 'update_collaboration', value: 'update_collaboration' }
    ]}
>
<TabItem value="update_collaboration">

Updates collaboration metadata and can only be called by the collaboration owner.

```sql
UPDATE aws.cleanrooms.collaborations
SET 
name = '{{ name }}',
description = '{{ description }}',
analyticsEngine = '{{ analyticsEngine }}'
WHERE 
collaboration_identifier = '{{ collaboration_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
collaboration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_collaboration"
    values={[
        { label: 'delete_collaboration', value: 'delete_collaboration' }
    ]}
>
<TabItem value="delete_collaboration">

Deletes a collaboration. It can only be called by the collaboration owner.

```sql
DELETE FROM aws.cleanrooms.collaborations
WHERE collaboration_identifier = '{{ collaboration_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
