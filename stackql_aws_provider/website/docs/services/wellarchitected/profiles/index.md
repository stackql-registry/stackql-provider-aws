--- 
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' },
        { label: 'list_profiles', value: 'list_profiles' }
    ]}
>
<TabItem value="get_profile">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time recorded.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services account ID. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The profile ARN. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:wellarchitected:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:profile/&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_description" /></td>
    <td><code>string</code></td>
    <td>The profile description.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The profile name.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_questions" /></td>
    <td><code>array</code></td>
    <td>Profile questions.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_version" /></td>
    <td><code>string</code></td>
    <td>The profile version. (pattern: &lt;code&gt;^&#91;A-Za-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="share_invitation_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the share invitation. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time recorded.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_profiles">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_summaries" /></td>
    <td><code>array</code></td>
    <td>Profile summaries.</td>
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
    <td><a href="#get_profile"><CopyableCode code="get_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ProfileVersion"><code>ProfileVersion</code></a></td>
    <td>Get profile information.</td>
</tr>
<tr>
    <td><a href="#list_profiles"><CopyableCode code="list_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ProfileNamePrefix"><code>ProfileNamePrefix</code></a>, <a href="#parameter-ProfileOwnerType"><code>ProfileOwnerType</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List profiles.</td>
</tr>
<tr>
    <td><a href="#create_profile"><CopyableCode code="create_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileName"><code>ProfileName</code></a>, <a href="#parameter-ProfileDescription"><code>ProfileDescription</code></a>, <a href="#parameter-ProfileQuestions"><code>ProfileQuestions</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a profile.</td>
</tr>
<tr>
    <td><a href="#associate_profiles"><CopyableCode code="associate_profiles" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileArns"><code>ProfileArns</code></a></td>
    <td></td>
    <td>Associate a profile with a workload.</td>
</tr>
<tr>
    <td><a href="#update_profile"><CopyableCode code="update_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a profile.</td>
</tr>
<tr>
    <td><a href="#delete_profile"><CopyableCode code="delete_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a profile. Disclaimer By sharing your profile with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your profile available to those other accounts. Those other accounts may continue to access and use your shared profile even if you delete the profile from your own Amazon Web Services account or terminate your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#disassociate_profiles"><CopyableCode code="disassociate_profiles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileArns"><code>ProfileArns</code></a></td>
    <td></td>
    <td>Disassociate a profile from a workload.</td>
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
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-profile_arn">
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The profile ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ProfileNamePrefix">
    <td><CopyableCode code="ProfileNamePrefix" /></td>
    <td><code>string</code></td>
    <td>An optional string added to the beginning of each profile name returned in the results.</td>
</tr>
<tr id="parameter-ProfileOwnerType">
    <td><CopyableCode code="ProfileOwnerType" /></td>
    <td><code>string</code></td>
    <td>Profile owner type.</td>
</tr>
<tr id="parameter-ProfileVersion">
    <td><CopyableCode code="ProfileVersion" /></td>
    <td><code>string</code></td>
    <td>The profile version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' },
        { label: 'list_profiles', value: 'list_profiles' }
    ]}
>
<TabItem value="get_profile">

Get profile information.

```sql
SELECT
created_at,
owner,
profile_arn,
profile_description,
profile_name,
profile_questions,
profile_version,
share_invitation_id,
tags,
updated_at
FROM aws.wellarchitected.profiles
WHERE profile_arn = '{{ profile_arn }}' -- required
AND region = '{{ region }}' -- required
AND ProfileVersion = '{{ ProfileVersion }}'
;
```
</TabItem>
<TabItem value="list_profiles">

List profiles.

```sql
SELECT
next_token,
profile_summaries
FROM aws.wellarchitected.profiles
WHERE region = '{{ region }}' -- required
AND ProfileNamePrefix = '{{ ProfileNamePrefix }}'
AND ProfileOwnerType = '{{ ProfileOwnerType }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_profile"
    values={[
        { label: 'create_profile', value: 'create_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_profile">

Create a profile.

```sql
INSERT INTO aws.wellarchitected.profiles (
ProfileName,
ProfileDescription,
ProfileQuestions,
ClientRequestToken,
Tags,
region
)
SELECT 
'{{ ProfileName }}' /* required */,
'{{ ProfileDescription }}' /* required */,
'{{ ProfileQuestions }}' /* required */,
'{{ ClientRequestToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
profile_arn,
profile_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the profiles resource.
    - name: ProfileName
      value: "{{ ProfileName }}"
    - name: ProfileDescription
      value: "{{ ProfileDescription }}"
    - name: ProfileQuestions
      value:
        - QuestionId: "{{ QuestionId }}"
          SelectedChoiceIds: "{{ SelectedChoiceIds }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned. This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_profiles"
    values={[
        { label: 'associate_profiles', value: 'associate_profiles' },
        { label: 'update_profile', value: 'update_profile' }
    ]}
>
<TabItem value="associate_profiles">

Associate a profile with a workload.

```sql
UPDATE aws.wellarchitected.profiles
SET 
ProfileArns = '{{ ProfileArns }}'
WHERE 
workload_id = '{{ workload_id }}' --required
AND region = '{{ region }}' --required
AND ProfileArns = '{{ ProfileArns }}' --required;
```
</TabItem>
<TabItem value="update_profile">

Update a profile.

```sql
UPDATE aws.wellarchitected.profiles
SET 
ProfileDescription = '{{ ProfileDescription }}',
ProfileQuestions = '{{ ProfileQuestions }}'
WHERE 
profile_arn = '{{ profile_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
profile;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_profile"
    values={[
        { label: 'delete_profile', value: 'delete_profile' }
    ]}
>
<TabItem value="delete_profile">

Delete a profile. Disclaimer By sharing your profile with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your profile available to those other accounts. Those other accounts may continue to access and use your shared profile even if you delete the profile from your own Amazon Web Services account or terminate your Amazon Web Services account.

```sql
DELETE FROM aws.wellarchitected.profiles
WHERE profile_arn = '{{ profile_arn }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_profiles"
    values={[
        { label: 'disassociate_profiles', value: 'disassociate_profiles' }
    ]}
>
<TabItem value="disassociate_profiles">

Disassociate a profile from a workload.

```sql
EXEC aws.wellarchitected.profiles.disassociate_profiles 
@workload_id='{{ workload_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ProfileArns": "{{ ProfileArns }}"
}'
;
```
</TabItem>
</Tabs>
