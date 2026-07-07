--- 
title: security_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profiles
  - connect
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

Creates, updates, deletes, gets or lists a <code>security_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.security_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_profile"
    values={[
        { label: 'describe_security_profile', value: 'describe_security_profile' },
        { label: 'list_security_profiles', value: 'list_security_profiles' },
        { label: 'search_security_profiles', value: 'search_security_profiles' }
    ]}
>
<TabItem value="describe_security_profile">

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
    <td><CopyableCode code="AllowedAccessControlHierarchyGroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.</td>
</tr>
<tr>
    <td><CopyableCode code="AllowedAccessControlTags" /></td>
    <td><code>object</code></td>
    <td>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="GranularAccessControlConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains granular access control configuration for security profiles, including data table access permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="HierarchyRestrictedResources" /></td>
    <td><code>array</code></td>
    <td>The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. Following are acceptable ResourceNames: User.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationResourceId" /></td>
    <td><code>string</code></td>
    <td>The organization resource identifier for the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityProfileName" /></td>
    <td><code>string</code></td>
    <td>The name for the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="TagRestrictedResources" /></td>
    <td><code>array</code></td>
    <td>The list of resources that a security profile applies tag restrictions to in Amazon Connect.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_profiles">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the security profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_security_profiles">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationResourceId" /></td>
    <td><code>string</code></td>
    <td>The organization resource identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#describe_security_profile"><CopyableCode code="describe_security_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-security_profile_id"><code>security_profile_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets basic information about the security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.</td>
</tr>
<tr>
    <td><a href="#list_security_profiles"><CopyableCode code="list_security_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides summary information about the security profiles for the specified Amazon Connect instance. For more information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.</td>
</tr>
<tr>
    <td><a href="#search_security_profiles"><CopyableCode code="search_security_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches security profiles in an Amazon Connect instance, with optional filtering. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.</td>
</tr>
<tr>
    <td><a href="#create_security_profile"><CopyableCode code="create_security_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecurityProfileName"><code>SecurityProfileName</code></a></td>
    <td></td>
    <td>Creates a security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.</td>
</tr>
<tr>
    <td><a href="#associate_security_profiles"><CopyableCode code="associate_security_profiles" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecurityProfiles"><code>SecurityProfiles</code></a>, <a href="#parameter-EntityType"><code>EntityType</code></a>, <a href="#parameter-EntityArn"><code>EntityArn</code></a></td>
    <td></td>
    <td>Associate security profiles with an Entity in an Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#update_user_security_profiles"><CopyableCode code="update_user_security_profiles" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecurityProfileIds"><code>SecurityProfileIds</code></a></td>
    <td></td>
    <td>Assigns the specified security profiles to the specified user.</td>
</tr>
<tr>
    <td><a href="#update_security_profile"><CopyableCode code="update_security_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-security_profile_id"><code>security_profile_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.</td>
</tr>
<tr>
    <td><a href="#delete_security_profile"><CopyableCode code="delete_security_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-security_profile_id"><code>security_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a security profile.</td>
</tr>
<tr>
    <td><a href="#disassociate_security_profiles"><CopyableCode code="disassociate_security_profiles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecurityProfiles"><code>SecurityProfiles</code></a>, <a href="#parameter-EntityType"><code>EntityType</code></a>, <a href="#parameter-EntityArn"><code>EntityArn</code></a></td>
    <td></td>
    <td>Disassociates a security profile attached to a Q in Connect AI Agent Entity in an Amazon Connect instance.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-security_profile_id">
    <td><CopyableCode code="security_profile_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the security profle.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user account.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_security_profile"
    values={[
        { label: 'describe_security_profile', value: 'describe_security_profile' },
        { label: 'list_security_profiles', value: 'list_security_profiles' },
        { label: 'search_security_profiles', value: 'search_security_profiles' }
    ]}
>
<TabItem value="describe_security_profile">

Gets basic information about the security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.

```sql
SELECT
AllowedAccessControlHierarchyGroupId,
AllowedAccessControlTags,
Arn,
Description,
GranularAccessControlConfiguration,
HierarchyRestrictedResources,
Id,
LastModifiedRegion,
LastModifiedTime,
OrganizationResourceId,
SecurityProfileName,
TagRestrictedResources,
Tags
FROM aws.connect.security_profiles
WHERE security_profile_id = '{{ security_profile_id }}' -- required
AND instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_profiles">

Provides summary information about the security profiles for the specified Amazon Connect instance. For more information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.

```sql
SELECT
Arn,
Id,
LastModifiedRegion,
LastModifiedTime,
Name
FROM aws.connect.security_profiles
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_security_profiles">

Searches security profiles in an Amazon Connect instance, with optional filtering. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.

```sql
SELECT
Arn,
Description,
Id,
OrganizationResourceId,
SecurityProfileName,
Tags
FROM aws.connect.security_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_profile"
    values={[
        { label: 'create_security_profile', value: 'create_security_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_profile">

Creates a security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.

```sql
INSERT INTO aws.connect.security_profiles (
SecurityProfileName,
Description,
Permissions,
Tags,
AllowedAccessControlTags,
TagRestrictedResources,
Applications,
HierarchyRestrictedResources,
AllowedAccessControlHierarchyGroupId,
AllowedFlowModules,
GranularAccessControlConfiguration,
instance_id,
region
)
SELECT 
'{{ SecurityProfileName }}' /* required */,
'{{ Description }}',
'{{ Permissions }}',
'{{ Tags }}',
'{{ AllowedAccessControlTags }}',
'{{ TagRestrictedResources }}',
'{{ Applications }}',
'{{ HierarchyRestrictedResources }}',
'{{ AllowedAccessControlHierarchyGroupId }}',
'{{ AllowedFlowModules }}',
'{{ GranularAccessControlConfiguration }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
SecurityProfileArn,
SecurityProfileId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_profiles
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the security_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_profiles resource.
    - name: SecurityProfileName
      value: "{{ SecurityProfileName }}"
    - name: Description
      value: "{{ Description }}"
    - name: Permissions
      value:
        - "{{ Permissions }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: AllowedAccessControlTags
      value: "{{ AllowedAccessControlTags }}"
    - name: TagRestrictedResources
      value:
        - "{{ TagRestrictedResources }}"
    - name: Applications
      value:
        - Namespace: "{{ Namespace }}"
          ApplicationPermissions: "{{ ApplicationPermissions }}"
          Type: "{{ Type }}"
    - name: HierarchyRestrictedResources
      value:
        - "{{ HierarchyRestrictedResources }}"
    - name: AllowedAccessControlHierarchyGroupId
      value: "{{ AllowedAccessControlHierarchyGroupId }}"
    - name: AllowedFlowModules
      value:
        - Type: "{{ Type }}"
          FlowModuleId: "{{ FlowModuleId }}"
    - name: GranularAccessControlConfiguration
      description: |
        Contains granular access control configuration for security profiles, including data table access permissions.
      value:
        DataTableAccessControlConfiguration:
          PrimaryAttributeAccessControlConfiguration:
            PrimaryAttributeValues:
              - AccessType: "{{ AccessType }}"
                AttributeName: "{{ AttributeName }}"
                Values: "{{ Values }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_security_profiles"
    values={[
        { label: 'associate_security_profiles', value: 'associate_security_profiles' },
        { label: 'update_user_security_profiles', value: 'update_user_security_profiles' },
        { label: 'update_security_profile', value: 'update_security_profile' }
    ]}
>
<TabItem value="associate_security_profiles">

Associate security profiles with an Entity in an Amazon Connect instance.

```sql
UPDATE aws.connect.security_profiles
SET 
SecurityProfiles = '{{ SecurityProfiles }}',
EntityType = '{{ EntityType }}',
EntityArn = '{{ EntityArn }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND SecurityProfiles = '{{ SecurityProfiles }}' --required
AND EntityType = '{{ EntityType }}' --required
AND EntityArn = '{{ EntityArn }}' --required;
```
</TabItem>
<TabItem value="update_user_security_profiles">

Assigns the specified security profiles to the specified user.

```sql
UPDATE aws.connect.security_profiles
SET 
SecurityProfileIds = '{{ SecurityProfileIds }}'
WHERE 
user_id = '{{ user_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND SecurityProfileIds = '{{ SecurityProfileIds }}' --required;
```
</TabItem>
<TabItem value="update_security_profile">

Updates a security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions.

```sql
UPDATE aws.connect.security_profiles
SET 
Description = '{{ Description }}',
Permissions = '{{ Permissions }}',
AllowedAccessControlTags = '{{ AllowedAccessControlTags }}',
TagRestrictedResources = '{{ TagRestrictedResources }}',
Applications = '{{ Applications }}',
HierarchyRestrictedResources = '{{ HierarchyRestrictedResources }}',
AllowedAccessControlHierarchyGroupId = '{{ AllowedAccessControlHierarchyGroupId }}',
AllowedFlowModules = '{{ AllowedFlowModules }}',
GranularAccessControlConfiguration = '{{ GranularAccessControlConfiguration }}'
WHERE 
security_profile_id = '{{ security_profile_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_profile"
    values={[
        { label: 'delete_security_profile', value: 'delete_security_profile' }
    ]}
>
<TabItem value="delete_security_profile">

Deletes a security profile.

```sql
DELETE FROM aws.connect.security_profiles
WHERE instance_id = '{{ instance_id }}' --required
AND security_profile_id = '{{ security_profile_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_security_profiles"
    values={[
        { label: 'disassociate_security_profiles', value: 'disassociate_security_profiles' }
    ]}
>
<TabItem value="disassociate_security_profiles">

Disassociates a security profile attached to a Q in Connect AI Agent Entity in an Amazon Connect instance.

```sql
EXEC aws.connect.security_profiles.disassociate_security_profiles 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SecurityProfiles": "{{ SecurityProfiles }}", 
"EntityType": "{{ EntityType }}", 
"EntityArn": "{{ EntityArn }}"
}'
;
```
</TabItem>
</Tabs>
