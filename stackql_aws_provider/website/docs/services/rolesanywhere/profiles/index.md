--- 
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
  - rolesanywhere
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rolesanywhere.profiles" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the profile. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="acceptRoleSessionName" /></td>
    <td><code>boolean</code></td>
    <td>Used to determine if a custom role session name will be accepted in a temporary credential request.</td>
</tr>
<tr>
    <td><CopyableCode code="attributeMappings" /></td>
    <td><code>array</code></td>
    <td>A mapping applied to the authenticating end-entity certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that created the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="durationSeconds" /></td>
    <td><code>integer</code></td>
    <td>Used to determine how long sessions vended using this profile are valid for. See the Expiration section of the CreateSession API documentation page for more details. In requests, if this value is not provided, the default value will be 3600.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the profile is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="managedPolicyArns" /></td>
    <td><code>array</code></td>
    <td>A list of managed policy ARNs that apply to the vended session credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="profileArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the profile. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:rolesanywhere(:.*)&#123;2&#125;(:profile.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profileId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the profile. (pattern: &lt;code&gt;.*&#91;a-f0-9&#93;&#123;8&#125;-(&#91;a-z0-9&#93;&#123;4&#125;-)&#123;3&#125;&#91;a-z0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requireInstanceProperties" /></td>
    <td><code>boolean</code></td>
    <td>Unused, saved for future use. Will likely specify whether instance properties are required in temporary credential requests with this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArns" /></td>
    <td><code>array</code></td>
    <td>A list of IAM roles that this profile can assume in a temporary credential request.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionPolicy" /></td>
    <td><code>string</code></td>
    <td>A session policy that applies to the trust boundary of the vended session credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the profile was last updated.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the profile. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="acceptRoleSessionName" /></td>
    <td><code>boolean</code></td>
    <td>Used to determine if a custom role session name will be accepted in a temporary credential request.</td>
</tr>
<tr>
    <td><CopyableCode code="attributeMappings" /></td>
    <td><code>array</code></td>
    <td>A mapping applied to the authenticating end-entity certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that created the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="durationSeconds" /></td>
    <td><code>integer</code></td>
    <td>Used to determine how long sessions vended using this profile are valid for. See the Expiration section of the CreateSession API documentation page for more details. In requests, if this value is not provided, the default value will be 3600.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the profile is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="managedPolicyArns" /></td>
    <td><code>array</code></td>
    <td>A list of managed policy ARNs that apply to the vended session credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="profileArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the profile. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:rolesanywhere(:.*)&#123;2&#125;(:profile.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profileId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the profile. (pattern: &lt;code&gt;.*&#91;a-f0-9&#93;&#123;8&#125;-(&#91;a-z0-9&#93;&#123;4&#125;-)&#123;3&#125;&#91;a-z0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requireInstanceProperties" /></td>
    <td><code>boolean</code></td>
    <td>Unused, saved for future use. Will likely specify whether instance properties are required in temporary credential requests with this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArns" /></td>
    <td><code>array</code></td>
    <td>A list of IAM roles that this profile can assume in a temporary credential request.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionPolicy" /></td>
    <td><code>string</code></td>
    <td>A session policy that applies to the trust boundary of the vended session credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the profile was last updated.</td>
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
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a profile. Required permissions: rolesanywhere:GetProfile.</td>
</tr>
<tr>
    <td><a href="#list_profiles"><CopyableCode code="list_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all profiles in the authenticated account and Amazon Web Services Region. Required permissions: rolesanywhere:ListProfiles.</td>
</tr>
<tr>
    <td><a href="#create_profile"><CopyableCode code="create_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArns"><code>roleArns</code></a></td>
    <td></td>
    <td>Creates a profile, a list of the roles that Roles Anywhere service is trusted to assume. You use profiles to intersect permissions with IAM managed policies. Required permissions: rolesanywhere:CreateProfile.</td>
</tr>
<tr>
    <td><a href="#update_profile"><CopyableCode code="update_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a profile, a list of the roles that IAM Roles Anywhere service is trusted to assume. You use profiles to intersect permissions with IAM managed policies. Required permissions: rolesanywhere:UpdateProfile.</td>
</tr>
<tr>
    <td><a href="#put_attribute_mapping"><CopyableCode code="put_attribute_mapping" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-certificateField"><code>certificateField</code></a>, <a href="#parameter-mappingRules"><code>mappingRules</code></a></td>
    <td></td>
    <td>Put an entry in the attribute mapping rules that will be enforced by a given profile. A mapping specifies a certificate field and one or more specifiers that have contextual meanings.</td>
</tr>
<tr>
    <td><a href="#delete_attribute_mapping"><CopyableCode code="delete_attribute_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-certificateField"><code>certificateField</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-specifiers"><code>specifiers</code></a></td>
    <td>Delete an entry from the attribute mapping rules enforced by a given profile.</td>
</tr>
<tr>
    <td><a href="#delete_profile"><CopyableCode code="delete_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a profile. Required permissions: rolesanywhere:DeleteProfile.</td>
</tr>
<tr>
    <td><a href="#disable_profile"><CopyableCode code="disable_profile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables a profile. When disabled, temporary credential requests with this profile fail. Required permissions: rolesanywhere:DisableProfile.</td>
</tr>
<tr>
    <td><a href="#enable_profile"><CopyableCode code="enable_profile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables temporary credential requests for a profile. Required permissions: rolesanywhere:EnableProfile.</td>
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
<tr id="parameter-certificateField">
    <td><CopyableCode code="certificateField" /></td>
    <td><code>string</code></td>
    <td>Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.</td>
</tr>
<tr id="parameter-profile_id">
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the profile.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of resources in the paginated list.</td>
</tr>
<tr id="parameter-specifiers">
    <td><CopyableCode code="specifiers" /></td>
    <td><code>array</code></td>
    <td>A list of specifiers of a certificate field; for example, CN, OU, UID from a Subject.</td>
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

Gets a profile. Required permissions: rolesanywhere:GetProfile.

```sql
SELECT
name,
acceptRoleSessionName,
attributeMappings,
createdAt,
createdBy,
durationSeconds,
enabled,
managedPolicyArns,
profileArn,
profileId,
requireInstanceProperties,
roleArns,
sessionPolicy,
updatedAt
FROM aws.rolesanywhere.profiles
WHERE profile_id = '{{ profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profiles">

Lists all profiles in the authenticated account and Amazon Web Services Region. Required permissions: rolesanywhere:ListProfiles.

```sql
SELECT
name,
acceptRoleSessionName,
attributeMappings,
createdAt,
createdBy,
durationSeconds,
enabled,
managedPolicyArns,
profileArn,
profileId,
requireInstanceProperties,
roleArns,
sessionPolicy,
updatedAt
FROM aws.rolesanywhere.profiles
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND pageSize = '{{ pageSize }}'
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

Creates a profile, a list of the roles that Roles Anywhere service is trusted to assume. You use profiles to intersect permissions with IAM managed policies. Required permissions: rolesanywhere:CreateProfile.

```sql
INSERT INTO aws.rolesanywhere.profiles (
name,
requireInstanceProperties,
sessionPolicy,
roleArns,
managedPolicyArns,
durationSeconds,
enabled,
tags,
acceptRoleSessionName,
region
)
SELECT 
'{{ name }}' /* required */,
{{ requireInstanceProperties }},
'{{ sessionPolicy }}',
'{{ roleArns }}' /* required */,
'{{ managedPolicyArns }}',
{{ durationSeconds }},
{{ enabled }},
'{{ tags }}',
{{ acceptRoleSessionName }},
'{{ region }}'
RETURNING
profile
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
    - name: name
      value: "{{ name }}"
    - name: requireInstanceProperties
      value: {{ requireInstanceProperties }}
    - name: sessionPolicy
      value: "{{ sessionPolicy }}"
    - name: roleArns
      value:
        - "{{ roleArns }}"
    - name: managedPolicyArns
      value:
        - "{{ managedPolicyArns }}"
    - name: durationSeconds
      value: {{ durationSeconds }}
    - name: enabled
      value: {{ enabled }}
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: acceptRoleSessionName
      value: {{ acceptRoleSessionName }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_profile"
    values={[
        { label: 'update_profile', value: 'update_profile' }
    ]}
>
<TabItem value="update_profile">

Updates a profile, a list of the roles that IAM Roles Anywhere service is trusted to assume. You use profiles to intersect permissions with IAM managed policies. Required permissions: rolesanywhere:UpdateProfile.

```sql
UPDATE aws.rolesanywhere.profiles
SET 
name = '{{ name }}',
sessionPolicy = '{{ sessionPolicy }}',
roleArns = '{{ roleArns }}',
managedPolicyArns = '{{ managedPolicyArns }}',
durationSeconds = {{ durationSeconds }},
acceptRoleSessionName = {{ acceptRoleSessionName }}
WHERE 
profile_id = '{{ profile_id }}' --required
AND region = '{{ region }}' --required
RETURNING
profile;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_attribute_mapping"
    values={[
        { label: 'put_attribute_mapping', value: 'put_attribute_mapping' }
    ]}
>
<TabItem value="put_attribute_mapping">

Put an entry in the attribute mapping rules that will be enforced by a given profile. A mapping specifies a certificate field and one or more specifiers that have contextual meanings.

```sql
REPLACE aws.rolesanywhere.profiles
SET 
certificateField = '{{ certificateField }}',
mappingRules = '{{ mappingRules }}'
WHERE 
profile_id = '{{ profile_id }}' --required
AND region = '{{ region }}' --required
AND certificateField = '{{ certificateField }}' --required
AND mappingRules = '{{ mappingRules }}' --required
RETURNING
profile;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attribute_mapping"
    values={[
        { label: 'delete_attribute_mapping', value: 'delete_attribute_mapping' },
        { label: 'delete_profile', value: 'delete_profile' }
    ]}
>
<TabItem value="delete_attribute_mapping">

Delete an entry from the attribute mapping rules enforced by a given profile.

```sql
DELETE FROM aws.rolesanywhere.profiles
WHERE profile_id = '{{ profile_id }}' --required
AND certificateField = '{{ certificateField }}' --required
AND region = '{{ region }}' --required
AND specifiers = '{{ specifiers }}'
;
```
</TabItem>
<TabItem value="delete_profile">

Deletes a profile. Required permissions: rolesanywhere:DeleteProfile.

```sql
DELETE FROM aws.rolesanywhere.profiles
WHERE profile_id = '{{ profile_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_profile"
    values={[
        { label: 'disable_profile', value: 'disable_profile' },
        { label: 'enable_profile', value: 'enable_profile' }
    ]}
>
<TabItem value="disable_profile">

Disables a profile. When disabled, temporary credential requests with this profile fail. Required permissions: rolesanywhere:DisableProfile.

```sql
EXEC aws.rolesanywhere.profiles.disable_profile 
@profile_id='{{ profile_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_profile">

Enables temporary credential requests for a profile. Required permissions: rolesanywhere:EnableProfile.

```sql
EXEC aws.rolesanywhere.profiles.enable_profile 
@profile_id='{{ profile_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
