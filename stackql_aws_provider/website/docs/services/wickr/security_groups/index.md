--- 
title: security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - security_groups
  - wickr
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

Creates, updates, deletes, gets or lists a <code>security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.security_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_group"
    values={[
        { label: 'get_security_group', value: 'get_security_group' },
        { label: 'list_security_groups', value: 'list_security_groups' }
    ]}
>
<TabItem value="get_security_group">

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
    <td>The unique identifier of the security group. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the security group. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_guid" /></td>
    <td><code>string</code></td>
    <td>The GUID of the Active Directory group associated with this security group, if synchronized with LDAP. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="active_members" /></td>
    <td><code>integer</code></td>
    <td>The number of active user members currently in the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="bot_members" /></td>
    <td><code>integer</code></td>
    <td>The number of bot members currently in the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default security group for the network. Each network has only one default group.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>integer</code></td>
    <td>The timestamp when the security group was last modified, specified in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_settings" /></td>
    <td><code>object</code></td>
    <td>The comprehensive configuration settings that define capabilities and restrictions for members of this security group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_groups">

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
    <td>The unique identifier of the security group. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the security group. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_guid" /></td>
    <td><code>string</code></td>
    <td>The GUID of the Active Directory group associated with this security group, if synchronized with LDAP. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="active_members" /></td>
    <td><code>integer</code></td>
    <td>The number of active user members currently in the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="bot_members" /></td>
    <td><code>integer</code></td>
    <td>The number of bot members currently in the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default security group for the network. Each network has only one default group.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>integer</code></td>
    <td>The timestamp when the security group was last modified, specified in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_settings" /></td>
    <td><code>object</code></td>
    <td>The comprehensive configuration settings that define capabilities and restrictions for members of this security group.</td>
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
    <td><a href="#get_security_group"><CopyableCode code="get_security_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific security group in a Wickr network, including its settings, member counts, and configuration.</td>
</tr>
<tr>
    <td><a href="#list_security_groups"><CopyableCode code="list_security_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortFields"><code>sortFields</code></a>, <a href="#parameter-sortDirection"><code>sortDirection</code></a></td>
    <td>Retrieves a paginated list of security groups in a specified Wickr network. You can sort the results by various criteria.</td>
</tr>
<tr>
    <td><a href="#create_security_group"><CopyableCode code="create_security_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-securityGroupSettings"><code>securityGroupSettings</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Creates a new security group in a Wickr network. Security groups allow you to organize users and control their permissions, features, and security settings.</td>
</tr>
<tr>
    <td><a href="#update_security_group"><CopyableCode code="update_security_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of an existing security group in a Wickr network, such as its name or settings.</td>
</tr>
<tr>
    <td><a href="#delete_security_group"><CopyableCode code="delete_security_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a security group from a Wickr network. This operation cannot be performed on the default security group.</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the security group to delete.</td>
</tr>
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network from which the security group will be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Client-Token">
    <td><CopyableCode code="X-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this request to ensure idempotency.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of security groups to return in a single page. Valid range is 1-100. Default is 10.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</td>
</tr>
<tr id="parameter-sortDirection">
    <td><CopyableCode code="sortDirection" /></td>
    <td><code>string</code></td>
    <td>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</td>
</tr>
<tr id="parameter-sortFields">
    <td><CopyableCode code="sortFields" /></td>
    <td><code>string</code></td>
    <td>The field to sort security groups by. Accepted values include 'id' and 'name'.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_group"
    values={[
        { label: 'get_security_group', value: 'get_security_group' },
        { label: 'list_security_groups', value: 'list_security_groups' }
    ]}
>
<TabItem value="get_security_group">

Retrieves detailed information about a specific security group in a Wickr network, including its settings, member counts, and configuration.

```sql
SELECT
id,
name,
active_directory_guid,
active_members,
bot_members,
is_default,
modified,
security_group_settings
FROM aws.wickr.security_groups
WHERE network_id = '{{ network_id }}' -- required
AND group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_groups">

Retrieves a paginated list of security groups in a specified Wickr network. You can sort the results by various criteria.

```sql
SELECT
id,
name,
active_directory_guid,
active_members,
bot_members,
is_default,
modified,
security_group_settings
FROM aws.wickr.security_groups
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND sortFields = '{{ sortFields }}'
AND sortDirection = '{{ sortDirection }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_group"
    values={[
        { label: 'create_security_group', value: 'create_security_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_group">

Creates a new security group in a Wickr network. Security groups allow you to organize users and control their permissions, features, and security settings.

```sql
INSERT INTO aws.wickr.security_groups (
name,
securityGroupSettings,
network_id,
region,
`X-Client-Token`
)
SELECT 
'{{ name }}' /* required */,
'{{ securityGroupSettings }}' /* required */,
'{{ network_id }}',
'{{ region }}',
'{{ X-Client-Token }}'
RETURNING
security_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_groups
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the security_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_groups resource.
    - name: name
      value: "{{ name }}"
    - name: securityGroupSettings
      description: |
        Contains the security group configuration settings that can be specified when creating or updating a security group. This is a subset of SecurityGroupSettings containing only the modifiable federation and security settings.
      value:
        lockoutThreshold: {{ lockoutThreshold }}
        permittedNetworks:
          - "{{ permittedNetworks }}"
        enableGuestFederation: {{ enableGuestFederation }}
        globalFederation: {{ globalFederation }}
        federationMode: {{ federationMode }}
        enableRestrictedGlobalFederation: {{ enableRestrictedGlobalFederation }}
        permittedWickrAwsNetworks:
          - region: "{{ region }}"
            networkId: "{{ networkId }}"
        permittedWickrEnterpriseNetworks:
          - domain: "{{ domain }}"
            networkId: "{{ networkId }}"
    - name: X-Client-Token
      value: "{{ X-Client-Token }}"
      description: A unique identifier for this request to ensure idempotency.
      description: A unique identifier for this request to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_group"
    values={[
        { label: 'update_security_group', value: 'update_security_group' }
    ]}
>
<TabItem value="update_security_group">

Updates the properties of an existing security group in a Wickr network, such as its name or settings.

```sql
UPDATE aws.wickr.security_groups
SET 
name = '{{ name }}',
securityGroupSettings = '{{ securityGroupSettings }}'
WHERE 
network_id = '{{ network_id }}' --required
AND group_id = '{{ group_id }}' --required
AND region = '{{ region }}' --required
RETURNING
security_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_group"
    values={[
        { label: 'delete_security_group', value: 'delete_security_group' }
    ]}
>
<TabItem value="delete_security_group">

Deletes a security group from a Wickr network. This operation cannot be performed on the default security group.

```sql
DELETE FROM aws.wickr.security_groups
WHERE network_id = '{{ network_id }}' --required
AND group_id = '{{ group_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
