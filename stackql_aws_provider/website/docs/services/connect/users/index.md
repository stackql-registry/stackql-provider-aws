--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' },
        { label: 'search_users', value: 'search_users' }
    ]}
>
<TabItem value="describe_user">

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
    <td><CopyableCode code="AfterContactWorkConfigs" /></td>
    <td><code>array</code></td>
    <td>A list of after contact work (ACW) timeout configuration settings for each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user account.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoAcceptConfigs" /></td>
    <td><code>array</code></td>
    <td>A list of auto-accept configuration settings for each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryUserId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user account in the directory used for identity management.</td>
</tr>
<tr>
    <td><CopyableCode code="HierarchyGroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the hierarchy group for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user account.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityInfo" /></td>
    <td><code>object</code></td>
    <td>Contains information about the identity of a user. For Amazon Connect instances that are created with the EXISTING_DIRECTORY identity management type, FirstName, LastName, and Email cannot be updated from within Amazon Connect because they are managed by the directory. The FirstName and LastName length constraints below apply only to instances using SAML for identity management. If you are using Amazon Connect for identity management, the length constraints are 1-255 for FirstName, and 1-256 for LastName.</td>
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
    <td><CopyableCode code="PersistentConnectionConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of persistent connection configuration settings for each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneConfig" /></td>
    <td><code>object</code></td>
    <td>Contains information about the phone configuration settings for a user.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of phone number configuration settings for each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingProfileId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the routing profile for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityProfileIds" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the security profiles for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="Username" /></td>
    <td><code>string</code></td>
    <td>The user name assigned to the user account.</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceEnhancementConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of voice enhancement configuration settings for each channel.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_users">

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
    <td>The Amazon Resource Name (ARN) of the user account.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user account.</td>
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
    <td><CopyableCode code="Username" /></td>
    <td><code>string</code></td>
    <td>The Amazon Connect user name of the user account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_users">

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
    <td><CopyableCode code="AfterContactWorkConfigs" /></td>
    <td><code>array</code></td>
    <td>A list of after contact work (ACW) timeout configuration settings for each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoAcceptConfigs" /></td>
    <td><code>array</code></td>
    <td>A list of auto-accept configuration settings for each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryUserId" /></td>
    <td><code>string</code></td>
    <td>The directory identifier of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="HierarchyGroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user's hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user's summary.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityInfo" /></td>
    <td><code>object</code></td>
    <td>The user's first name and last name.</td>
</tr>
<tr>
    <td><CopyableCode code="PersistentConnectionConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of persistent connection configuration settings for each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneConfig" /></td>
    <td><code>object</code></td>
    <td>Contains information about the phone configuration settings for a user.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of phone number configuration settings for each channel.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingProfileId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user's routing profile.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityProfileIds" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the user's security profiles.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="Username" /></td>
    <td><code>string</code></td>
    <td>The name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceEnhancementConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of voice enhancement configuration settings for each channel.</td>
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
    <td><a href="#describe_user"><CopyableCode code="describe_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified user. You can find the instance ID in the Amazon Connect console (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides summary information about the users for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#search_users"><CopyableCode code="search_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches users in an Amazon Connect instance, with optional filtering. AfterContactWorkTimeLimit is returned in milliseconds.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecurityProfileIds"><code>SecurityProfileIds</code></a>, <a href="#parameter-RoutingProfileId"><code>RoutingProfileId</code></a></td>
    <td></td>
    <td>Creates a user account for the specified Amazon Connect instance. Certain UserIdentityInfo parameters are required in some situations. For example, Email, FirstName and LastName are required if you are using Amazon Connect or SAML for identity management. Fields in PhoneConfig cannot be set simultaneously with their corresponding channel-specific configuration parameters. Specifically: PhoneConfig.AutoAccept conflicts with AutoAcceptConfigs PhoneConfig.AfterContactWorkTimeLimit conflicts with AfterContactWorkConfigs PhoneConfig.PhoneType and PhoneConfig.PhoneNumber conflict with PhoneNumberConfigs PhoneConfig.PersistentConnection conflicts with PersistentConnectionConfigs We recommend using channel-specific parameters such as AutoAcceptConfigs, AfterContactWorkConfigs, PhoneNumberConfigs, PersistentConnectionConfigs, and VoiceEnhancementConfigs for per-channel configuration. For information about how to create users using the Amazon Connect admin website, see Add Users in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#associate_contact_with_user"><CopyableCode code="associate_contact_with_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserId"><code>UserId</code></a></td>
    <td></td>
    <td>Associates a queued contact with an agent. Use cases Following are common uses cases for this API: Programmatically assign queued contacts to available users. Leverage the IAM context key connect:PreferredUserArn to restrict contact association to specific preferred user. Important things to know Use this API with chat, email, and task contacts. It does not support voice contacts. Use it to associate contacts with users regardless of their current state, including custom states. Ensure your application logic accounts for user availability before making associations. It honors the IAM context key connect:PreferredUserArn to prevent unauthorized contact associations. It respects the IAM context key connect:PreferredUserArn to enforce authorization controls and prevent unauthorized contact associations. Verify that your IAM policies are properly configured to support your intended use cases. The service quota Queues per routing profile per instance applies to manually assigned queues, too. For more information about this quota, see Amazon Connect quotas in the Amazon Connect Administrator Guide. Endpoints: See Amazon Connect endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#update_user_identity_info"><CopyableCode code="update_user_identity_info" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityInfo"><code>IdentityInfo</code></a></td>
    <td></td>
    <td>Updates the identity information for the specified user. We strongly recommend limiting who has the ability to invoke UpdateUserIdentityInfo. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see Best Practices for Security Profiles in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#update_user_phone_config"><CopyableCode code="update_user_phone_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PhoneConfig"><code>PhoneConfig</code></a></td>
    <td></td>
    <td>Updates the phone configuration settings for the specified user. We recommend using the UpdateUserConfig API, which supports additional functionality that is not available in the UpdateUserPhoneConfig API, such as voice enhancement settings and per-channel configuration for auto-accept and After Contact Work (ACW) timeouts. In comparison, the UpdateUserPhoneConfig API will always set the same ACW timeouts to all channels the user handles.</td>
</tr>
<tr>
    <td><a href="#update_user_config"><CopyableCode code="update_user_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration settings for the specified user, including per-channel auto-accept and after contact work (ACW) timeout settings. This operation replaces the UpdateUserPhoneConfig API. While UpdateUserPhoneConfig applies the same ACW timeout to all channels, UpdateUserConfig allows you to set different auto-accept and ACW timeout values for each channel type.</td>
</tr>
<tr>
    <td><a href="#put_user_status"><CopyableCode code="put_user_status" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AgentStatusId"><code>AgentStatusId</code></a></td>
    <td></td>
    <td>Changes the current status of a user or agent in Amazon Connect. If the agent is currently handling a contact, this sets the agent's next status. For more information, see Agent status and Set your next status in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user account from the specified Amazon Connect instance. For information about what happens to a user's data when their account is deleted, see Delete Users from Your Amazon Connect Instance in the Amazon Connect Administrator Guide. After calling DeleteUser, call DeleteQuickConnect to delete any records related to the deleted users. This will help you: Avoid dangling resources that impact your service quotas. Remove deleted users so they don't appear to agents as transfer options. Avoid the disruption of other Amazon Connect processes, such as instance replication and syncing if you're using Amazon Connect Global Resiliency.</td>
</tr>
<tr>
    <td><a href="#update_user_hierarchy"><CopyableCode code="update_user_hierarchy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Assigns the specified hierarchy group to the specified user.</td>
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
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the contact in this instance of Amazon Connect.</td>
</tr>
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
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' },
        { label: 'search_users', value: 'search_users' }
    ]}
>
<TabItem value="describe_user">

Describes the specified user. You can find the instance ID in the Amazon Connect console (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.

```sql
SELECT
AfterContactWorkConfigs,
Arn,
AutoAcceptConfigs,
DirectoryUserId,
HierarchyGroupId,
Id,
IdentityInfo,
LastModifiedRegion,
LastModifiedTime,
PersistentConnectionConfigs,
PhoneConfig,
PhoneNumberConfigs,
RoutingProfileId,
SecurityProfileIds,
Tags,
Username,
VoiceEnhancementConfigs
FROM aws.connect.users
WHERE user_id = '{{ user_id }}' -- required
AND instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Provides summary information about the users for the specified Amazon Connect instance.

```sql
SELECT
Arn,
Id,
LastModifiedRegion,
LastModifiedTime,
Username
FROM aws.connect.users
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_users">

Searches users in an Amazon Connect instance, with optional filtering. AfterContactWorkTimeLimit is returned in milliseconds.

```sql
SELECT
AfterContactWorkConfigs,
Arn,
AutoAcceptConfigs,
DirectoryUserId,
HierarchyGroupId,
Id,
IdentityInfo,
PersistentConnectionConfigs,
PhoneConfig,
PhoneNumberConfigs,
RoutingProfileId,
SecurityProfileIds,
Tags,
Username,
VoiceEnhancementConfigs
FROM aws.connect.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user"
    values={[
        { label: 'create_user', value: 'create_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user">

Creates a user account for the specified Amazon Connect instance. Certain UserIdentityInfo parameters are required in some situations. For example, Email, FirstName and LastName are required if you are using Amazon Connect or SAML for identity management. Fields in PhoneConfig cannot be set simultaneously with their corresponding channel-specific configuration parameters. Specifically: PhoneConfig.AutoAccept conflicts with AutoAcceptConfigs PhoneConfig.AfterContactWorkTimeLimit conflicts with AfterContactWorkConfigs PhoneConfig.PhoneType and PhoneConfig.PhoneNumber conflict with PhoneNumberConfigs PhoneConfig.PersistentConnection conflicts with PersistentConnectionConfigs We recommend using channel-specific parameters such as AutoAcceptConfigs, AfterContactWorkConfigs, PhoneNumberConfigs, PersistentConnectionConfigs, and VoiceEnhancementConfigs for per-channel configuration. For information about how to create users using the Amazon Connect admin website, see Add Users in the Amazon Connect Administrator Guide.

```sql
INSERT INTO aws.connect.users (
Username,
Password,
IdentityInfo,
PhoneConfig,
DirectoryUserId,
SecurityProfileIds,
RoutingProfileId,
HierarchyGroupId,
AutoAcceptConfigs,
AfterContactWorkConfigs,
PhoneNumberConfigs,
PersistentConnectionConfigs,
VoiceEnhancementConfigs,
Tags,
instance_id,
region
)
SELECT 
'{{ Username }}',
'{{ Password }}',
'{{ IdentityInfo }}',
'{{ PhoneConfig }}',
'{{ DirectoryUserId }}',
'{{ SecurityProfileIds }}' /* required */,
'{{ RoutingProfileId }}' /* required */,
'{{ HierarchyGroupId }}',
'{{ AutoAcceptConfigs }}',
'{{ AfterContactWorkConfigs }}',
'{{ PhoneNumberConfigs }}',
'{{ PersistentConnectionConfigs }}',
'{{ VoiceEnhancementConfigs }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
UserArn,
UserId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the users resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: Username
      value: "{{ Username }}"
    - name: Password
      value: "{{ Password }}"
    - name: IdentityInfo
      description: |
        Contains information about the identity of a user. For Amazon Connect instances that are created with the EXISTING_DIRECTORY identity management type, FirstName, LastName, and Email cannot be updated from within Amazon Connect because they are managed by the directory. The FirstName and LastName length constraints below apply only to instances using SAML for identity management. If you are using Amazon Connect for identity management, the length constraints are 1-255 for FirstName, and 1-256 for LastName.
      value:
        FirstName: "{{ FirstName }}"
        LastName: "{{ LastName }}"
        Email: "{{ Email }}"
        SecondaryEmail: "{{ SecondaryEmail }}"
        Mobile: "{{ Mobile }}"
    - name: PhoneConfig
      description: |
        Contains information about the phone configuration settings for a user.
      value:
        PhoneType: "{{ PhoneType }}"
        AutoAccept: {{ AutoAccept }}
        AfterContactWorkTimeLimit: {{ AfterContactWorkTimeLimit }}
        DeskPhoneNumber: "{{ DeskPhoneNumber }}"
        PersistentConnection: {{ PersistentConnection }}
    - name: DirectoryUserId
      value: "{{ DirectoryUserId }}"
    - name: SecurityProfileIds
      value:
        - "{{ SecurityProfileIds }}"
    - name: RoutingProfileId
      value: "{{ RoutingProfileId }}"
    - name: HierarchyGroupId
      value: "{{ HierarchyGroupId }}"
    - name: AutoAcceptConfigs
      description: |
        A list of auto-accept configuration settings for each channel.
      value:
        - Channel: "{{ Channel }}"
          AutoAccept: {{ AutoAccept }}
          AgentFirstCallbackAutoAccept: {{ AgentFirstCallbackAutoAccept }}
    - name: AfterContactWorkConfigs
      description: |
        A list of after contact work (ACW) timeout configuration settings for each channel.
      value:
        - Channel: "{{ Channel }}"
          AfterContactWorkConfig:
            AfterContactWorkTimeLimit: {{ AfterContactWorkTimeLimit }}
          AgentFirstCallbackAfterContactWorkConfig:
            AfterContactWorkTimeLimit: {{ AfterContactWorkTimeLimit }}
    - name: PhoneNumberConfigs
      description: |
        The list of phone number configuration settings for each channel.
      value:
        - Channel: "{{ Channel }}"
          PhoneType: "{{ PhoneType }}"
          PhoneNumber: "{{ PhoneNumber }}"
    - name: PersistentConnectionConfigs
      description: |
        The list of persistent connection configuration settings for each channel.
      value:
        - Channel: "{{ Channel }}"
          PersistentConnection: {{ PersistentConnection }}
    - name: VoiceEnhancementConfigs
      description: |
        The list of voice enhancement configuration settings for each channel.
      value:
        - Channel: "{{ Channel }}"
          VoiceEnhancementMode: "{{ VoiceEnhancementMode }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_contact_with_user"
    values={[
        { label: 'associate_contact_with_user', value: 'associate_contact_with_user' },
        { label: 'update_user_identity_info', value: 'update_user_identity_info' },
        { label: 'update_user_phone_config', value: 'update_user_phone_config' },
        { label: 'update_user_config', value: 'update_user_config' }
    ]}
>
<TabItem value="associate_contact_with_user">

Associates a queued contact with an agent. Use cases Following are common uses cases for this API: Programmatically assign queued contacts to available users. Leverage the IAM context key connect:PreferredUserArn to restrict contact association to specific preferred user. Important things to know Use this API with chat, email, and task contacts. It does not support voice contacts. Use it to associate contacts with users regardless of their current state, including custom states. Ensure your application logic accounts for user availability before making associations. It honors the IAM context key connect:PreferredUserArn to prevent unauthorized contact associations. It respects the IAM context key connect:PreferredUserArn to enforce authorization controls and prevent unauthorized contact associations. Verify that your IAM policies are properly configured to support your intended use cases. The service quota Queues per routing profile per instance applies to manually assigned queues, too. For more information about this quota, see Amazon Connect quotas in the Amazon Connect Administrator Guide. Endpoints: See Amazon Connect endpoints and quotas.

```sql
UPDATE aws.connect.users
SET 
UserId = '{{ UserId }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND contact_id = '{{ contact_id }}' --required
AND region = '{{ region }}' --required
AND UserId = '{{ UserId }}' --required;
```
</TabItem>
<TabItem value="update_user_identity_info">

Updates the identity information for the specified user. We strongly recommend limiting who has the ability to invoke UpdateUserIdentityInfo. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see Best Practices for Security Profiles in the Amazon Connect Administrator Guide.

```sql
UPDATE aws.connect.users
SET 
IdentityInfo = '{{ IdentityInfo }}'
WHERE 
user_id = '{{ user_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND IdentityInfo = '{{ IdentityInfo }}' --required;
```
</TabItem>
<TabItem value="update_user_phone_config">

Updates the phone configuration settings for the specified user. We recommend using the UpdateUserConfig API, which supports additional functionality that is not available in the UpdateUserPhoneConfig API, such as voice enhancement settings and per-channel configuration for auto-accept and After Contact Work (ACW) timeouts. In comparison, the UpdateUserPhoneConfig API will always set the same ACW timeouts to all channels the user handles.

```sql
UPDATE aws.connect.users
SET 
PhoneConfig = '{{ PhoneConfig }}'
WHERE 
user_id = '{{ user_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND PhoneConfig = '{{ PhoneConfig }}' --required;
```
</TabItem>
<TabItem value="update_user_config">

Updates the configuration settings for the specified user, including per-channel auto-accept and after contact work (ACW) timeout settings. This operation replaces the UpdateUserPhoneConfig API. While UpdateUserPhoneConfig applies the same ACW timeout to all channels, UpdateUserConfig allows you to set different auto-accept and ACW timeout values for each channel type.

```sql
UPDATE aws.connect.users
SET 
AutoAcceptConfigs = '{{ AutoAcceptConfigs }}',
AfterContactWorkConfigs = '{{ AfterContactWorkConfigs }}',
PhoneNumberConfigs = '{{ PhoneNumberConfigs }}',
PersistentConnectionConfigs = '{{ PersistentConnectionConfigs }}',
VoiceEnhancementConfigs = '{{ VoiceEnhancementConfigs }}'
WHERE 
user_id = '{{ user_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_user_status"
    values={[
        { label: 'put_user_status', value: 'put_user_status' }
    ]}
>
<TabItem value="put_user_status">

Changes the current status of a user or agent in Amazon Connect. If the agent is currently handling a contact, this sets the agent's next status. For more information, see Agent status and Set your next status in the Amazon Connect Administrator Guide.

```sql
REPLACE aws.connect.users
SET 
AgentStatusId = '{{ AgentStatusId }}'
WHERE 
user_id = '{{ user_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND AgentStatusId = '{{ AgentStatusId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user"
    values={[
        { label: 'delete_user', value: 'delete_user' }
    ]}
>
<TabItem value="delete_user">

Deletes a user account from the specified Amazon Connect instance. For information about what happens to a user's data when their account is deleted, see Delete Users from Your Amazon Connect Instance in the Amazon Connect Administrator Guide. After calling DeleteUser, call DeleteQuickConnect to delete any records related to the deleted users. This will help you: Avoid dangling resources that impact your service quotas. Remove deleted users so they don't appear to agents as transfer options. Avoid the disruption of other Amazon Connect processes, such as instance replication and syncing if you're using Amazon Connect Global Resiliency.

```sql
DELETE FROM aws.connect.users
WHERE instance_id = '{{ instance_id }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_user_hierarchy"
    values={[
        { label: 'update_user_hierarchy', value: 'update_user_hierarchy' }
    ]}
>
<TabItem value="update_user_hierarchy">

Assigns the specified hierarchy group to the specified user.

```sql
EXEC aws.connect.users.update_user_hierarchy 
@user_id='{{ user_id }}' --required, 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"HierarchyGroupId": "{{ HierarchyGroupId }}"
}'
;
```
</TabItem>
</Tabs>
