--- 
title: stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - stacks
  - appstream
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

Creates, updates, deletes, gets or lists a <code>stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.stacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stacks"
    values={[
        { label: 'describe_stacks', value: 'describe_stacks' }
    ]}
>
<TabItem value="describe_stacks">

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
    <td><CopyableCode code="AccessEndpoints" /></td>
    <td><code>array</code></td>
    <td>The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to WorkSpaces Applications only through the specified endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="AgentAccessConfig" /></td>
    <td><code>object</code></td>
    <td>The agent access configuration of the stack, if agent access is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationSettings" /></td>
    <td><code>object</code></td>
    <td>The persistent application settings for users of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the stack. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ContentRedirection" /></td>
    <td><code>object</code></td>
    <td>Configuration for bidirectional URL redirection between the streaming session and the local client. Use HostToClient to redirect URLs from the remote desktop to the local browser.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the stack was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description to display.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The stack name to display.</td>
</tr>
<tr>
    <td><CopyableCode code="EmbedHostDomains" /></td>
    <td><code>array</code></td>
    <td>The domains where WorkSpaces Applications streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded WorkSpaces Applications streaming sessions.</td>
</tr>
<tr>
    <td><CopyableCode code="FeedbackURL" /></td>
    <td><code>string</code></td>
    <td>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="RedirectURL" /></td>
    <td><code>string</code></td>
    <td>The URL that users are redirected to after their streaming session ends.</td>
</tr>
<tr>
    <td><CopyableCode code="StackErrors" /></td>
    <td><code>array</code></td>
    <td>The errors for the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageConnectors" /></td>
    <td><code>array</code></td>
    <td>The storage connectors to enable.</td>
</tr>
<tr>
    <td><CopyableCode code="StreamingExperienceSettings" /></td>
    <td><code>object</code></td>
    <td>The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.</td>
</tr>
<tr>
    <td><CopyableCode code="UserSettings" /></td>
    <td><code>array</code></td>
    <td>The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.</td>
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
    <td><a href="#describe_stacks"><CopyableCode code="describe_stacks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.</td>
</tr>
<tr>
    <td><a href="#create_stack"><CopyableCode code="create_stack" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations.</td>
</tr>
<tr>
    <td><a href="#update_stack"><CopyableCode code="update_stack" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified fields for the specified stack.</td>
</tr>
<tr>
    <td><a href="#delete_stack"><CopyableCode code="delete_stack" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.</td>
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
    defaultValue="describe_stacks"
    values={[
        { label: 'describe_stacks', value: 'describe_stacks' }
    ]}
>
<TabItem value="describe_stacks">

Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.

```sql
SELECT
AccessEndpoints,
AgentAccessConfig,
ApplicationSettings,
Arn,
ContentRedirection,
CreatedTime,
Description,
DisplayName,
EmbedHostDomains,
FeedbackURL,
Name,
RedirectURL,
StackErrors,
StorageConnectors,
StreamingExperienceSettings,
UserSettings
FROM aws.appstream.stacks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stack"
    values={[
        { label: 'create_stack', value: 'create_stack' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stack">

Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations.

```sql
INSERT INTO aws.appstream.stacks (
Name,
Description,
DisplayName,
StorageConnectors,
RedirectURL,
FeedbackURL,
UserSettings,
ApplicationSettings,
Tags,
AccessEndpoints,
EmbedHostDomains,
StreamingExperienceSettings,
ContentRedirection,
AgentAccessConfig,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ DisplayName }}',
'{{ StorageConnectors }}',
'{{ RedirectURL }}',
'{{ FeedbackURL }}',
'{{ UserSettings }}',
'{{ ApplicationSettings }}',
'{{ Tags }}',
'{{ AccessEndpoints }}',
'{{ EmbedHostDomains }}',
'{{ StreamingExperienceSettings }}',
'{{ ContentRedirection }}',
'{{ AgentAccessConfig }}',
'{{ region }}'
RETURNING
Stack
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stacks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stacks resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the stack.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description to display.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The stack name to display.
    - name: StorageConnectors
      description: |
        The storage connectors to enable.
      value:
        - ConnectorType: "{{ ConnectorType }}"
          ResourceIdentifier: "{{ ResourceIdentifier }}"
          Domains: "{{ Domains }}"
          DomainsRequireAdminConsent: "{{ DomainsRequireAdminConsent }}"
    - name: RedirectURL
      value: "{{ RedirectURL }}"
      description: |
        The URL that users are redirected to after their streaming session ends.
    - name: FeedbackURL
      value: "{{ FeedbackURL }}"
      description: |
        The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
    - name: UserSettings
      description: |
        The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.
      value:
        - Action: "{{ Action }}"
          Permission: "{{ Permission }}"
          MaximumLength: {{ MaximumLength }}
    - name: ApplicationSettings
      description: |
        The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
      value:
        Enabled: {{ Enabled }}
        SettingsGroup: "{{ SettingsGroup }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to associate with the stack. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. If you do not specify a value, the value is set to an empty string. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: _ . : / = + \ - @ For more information about tags, see Tagging Your Resources in the Amazon WorkSpaces Applications Administration Guide.
    - name: AccessEndpoints
      description: |
        The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to WorkSpaces Applications only through the specified endpoints.
      value:
        - EndpointType: "{{ EndpointType }}"
          VpceId: "{{ VpceId }}"
    - name: EmbedHostDomains
      value:
        - "{{ EmbedHostDomains }}"
      description: |
        The domains where WorkSpaces Applications streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded WorkSpaces Applications streaming sessions.
    - name: StreamingExperienceSettings
      description: |
        The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
      value:
        PreferredProtocol: "{{ PreferredProtocol }}"
    - name: ContentRedirection
      description: |
        Configuration for bidirectional URL redirection between the streaming session and the local client. Use HostToClient to redirect URLs from the remote desktop to the local browser.
      value:
        HostToClient:
          Enabled: {{ Enabled }}
          AllowedUrls:
            - "{{ AllowedUrls }}"
          DeniedUrls:
            - "{{ DeniedUrls }}"
    - name: AgentAccessConfig
      description: |
        The configuration for agent access on the stack. If specified, agent access is enabled for the stack.
      value:
        Settings:
          - AgentAction: "{{ AgentAction }}"
            Permission: "{{ Permission }}"
        S3BucketArn: "{{ S3BucketArn }}"
        ScreenshotsUploadEnabled: {{ ScreenshotsUploadEnabled }}
        ScreenResolution: "{{ ScreenResolution }}"
        ScreenImageFormat: "{{ ScreenImageFormat }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stack"
    values={[
        { label: 'update_stack', value: 'update_stack' }
    ]}
>
<TabItem value="update_stack">

Updates the specified fields for the specified stack.

```sql
UPDATE aws.appstream.stacks
SET 
DisplayName = '{{ DisplayName }}',
Description = '{{ Description }}',
Name = '{{ Name }}',
StorageConnectors = '{{ StorageConnectors }}',
DeleteStorageConnectors = {{ DeleteStorageConnectors }},
RedirectURL = '{{ RedirectURL }}',
FeedbackURL = '{{ FeedbackURL }}',
AttributesToDelete = '{{ AttributesToDelete }}',
UserSettings = '{{ UserSettings }}',
ApplicationSettings = '{{ ApplicationSettings }}',
AccessEndpoints = '{{ AccessEndpoints }}',
EmbedHostDomains = '{{ EmbedHostDomains }}',
StreamingExperienceSettings = '{{ StreamingExperienceSettings }}',
ContentRedirection = '{{ ContentRedirection }}',
AgentAccessConfig = '{{ AgentAccessConfig }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Stack;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stack"
    values={[
        { label: 'delete_stack', value: 'delete_stack' }
    ]}
>
<TabItem value="delete_stack">

Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.

```sql
DELETE FROM aws.appstream.stacks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
