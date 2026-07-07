--- 
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
  - transfer
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_profile"
    values={[
        { label: 'describe_profile', value: 'describe_profile' },
        { label: 'list_profiles', value: 'list_profiles' }
    ]}
>
<TabItem value="describe_profile">

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
    <td>The unique Amazon Resource Name (ARN) for the profile. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="As2Id" /></td>
    <td><code>string</code></td>
    <td>The As2Id is the AS2-name, as defined in the RFC 4130. For inbound transfers, this is the AS2-From header for the AS2 messages sent from the partner. For outbound connectors, this is the AS2-To header for the AS2 messages sent to the partner using the StartFileTransfer API operation. This ID cannot include spaces. (pattern: &lt;code&gt;&#91;\u0020-\u007E\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateIds" /></td>
    <td><code>array</code></td>
    <td>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the local or partner AS2 profile. (pattern: &lt;code&gt;p-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileType" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to list only LOCAL type profiles or only PARTNER type profiles. If not supplied in the request, the command lists all types of profiles. (LOCAL, PARTNER)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs that can be used to group and search for profiles.</td>
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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified profile. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="As2Id" /></td>
    <td><code>string</code></td>
    <td>The As2Id is the AS2-name, as defined in the RFC 4130. For inbound transfers, this is the AS2-From header for the AS2 messages sent from the partner. For outbound connectors, this is the AS2-To header for the AS2 messages sent to the partner using the StartFileTransfer API operation. This ID cannot include spaces. (pattern: &lt;code&gt;&#91;\u0020-\u007E\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the local or partner AS2 profile. (pattern: &lt;code&gt;p-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileType" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to list only LOCAL type profiles or only PARTNER type profiles. If not supplied in the request, the command lists all types of profiles. (LOCAL, PARTNER)</td>
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
    <td><a href="#describe_profile"><CopyableCode code="describe_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of the profile that's specified by the ProfileId.</td>
</tr>
<tr>
    <td><a href="#list_profiles"><CopyableCode code="list_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for NextToken, you can supply that value to continue listing profiles from where you left off.</td>
</tr>
<tr>
    <td><a href="#create_profile"><CopyableCode code="create_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-As2Id"><code>As2Id</code></a>, <a href="#parameter-ProfileType"><code>ProfileType</code></a></td>
    <td></td>
    <td>Creates the local or partner profile to use for AS2 transfers.</td>
</tr>
<tr>
    <td><a href="#update_profile"><CopyableCode code="update_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileId"><code>ProfileId</code></a></td>
    <td></td>
    <td>Updates some of the parameters for an existing profile. Provide the ProfileId for the profile that you want to update, along with the new values for the parameters to update.</td>
</tr>
<tr>
    <td><a href="#delete_profile"><CopyableCode code="delete_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the profile that's specified in the ProfileId parameter.</td>
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
    defaultValue="describe_profile"
    values={[
        { label: 'describe_profile', value: 'describe_profile' },
        { label: 'list_profiles', value: 'list_profiles' }
    ]}
>
<TabItem value="describe_profile">

Returns the details of the profile that's specified by the ProfileId.

```sql
SELECT
Arn,
As2Id,
CertificateIds,
ProfileId,
ProfileType,
Tags
FROM aws.transfer.profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profiles">

Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for NextToken, you can supply that value to continue listing profiles from where you left off.

```sql
SELECT
Arn,
As2Id,
ProfileId,
ProfileType
FROM aws.transfer.profiles
WHERE region = '{{ region }}' -- required
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

Creates the local or partner profile to use for AS2 transfers.

```sql
INSERT INTO aws.transfer.profiles (
As2Id,
ProfileType,
CertificateIds,
Tags,
region
)
SELECT 
'{{ As2Id }}' /* required */,
'{{ ProfileType }}' /* required */,
'{{ CertificateIds }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ProfileId
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
    - name: As2Id
      value: "{{ As2Id }}"
      description: |
        The As2Id is the AS2-name, as defined in the RFC 4130. For inbound transfers, this is the AS2-From header for the AS2 messages sent from the partner. For outbound connectors, this is the AS2-To header for the AS2 messages sent to the partner using the StartFileTransfer API operation. This ID cannot include spaces.
    - name: ProfileType
      value: "{{ ProfileType }}"
      description: |
        Determines the type of profile to create: Specify LOCAL to create a local profile. A local profile represents the AS2-enabled Transfer Family server organization or party. Specify PARTNER to create a partner profile. A partner profile represents a remote organization, external to Transfer Family.
      valid_values: ['LOCAL', 'PARTNER']
    - name: CertificateIds
      value:
        - "{{ CertificateIds }}"
      description: |
        An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
    - name: Tags
      description: |
        Key-value pairs that can be used to group and search for AS2 profiles.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Updates some of the parameters for an existing profile. Provide the ProfileId for the profile that you want to update, along with the new values for the parameters to update.

```sql
UPDATE aws.transfer.profiles
SET 
ProfileId = '{{ ProfileId }}',
CertificateIds = '{{ CertificateIds }}'
WHERE 
region = '{{ region }}' --required
AND ProfileId = '{{ ProfileId }}' --required
RETURNING
ProfileId;
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

Deletes the profile that's specified in the ProfileId parameter.

```sql
DELETE FROM aws.transfer.profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
