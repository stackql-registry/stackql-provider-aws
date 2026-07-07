--- 
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
  - b2bi
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.b2bi.profiles" /></td></tr>
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
    <td>Returns the name of the profile, used to identify it.</td>
</tr>
<tr>
    <td><CopyableCode code="businessName" /></td>
    <td><code>string</code></td>
    <td>Returns the name for the business associated with this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for creation date and time of the transformer.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Returns the email address associated with this customer profile. (pattern: &lt;code&gt;&#91;\w\.\-&#93;+@&#91;\w\.\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logGroupName" /></td>
    <td><code>string</code></td>
    <td>Returns the name of the logging group.</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>string</code></td>
    <td>Returns whether or not logging is enabled for this profile. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for last time the profile was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>Returns the phone number associated with the profile. (pattern: &lt;code&gt;\+?(&#91;0-9 \t\-()\/&#93;&#123;7,&#125;)(?:\s*(?:#|x\.?|ext\.?|extension) \t*(\d+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profileArn" /></td>
    <td><code>string</code></td>
    <td>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</td>
</tr>
<tr>
    <td><CopyableCode code="profileId" /></td>
    <td><code>string</code></td>
    <td>Returns the unique, system-generated identifier for the profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td>Returns the display name for profile.</td>
</tr>
<tr>
    <td><CopyableCode code="businessName" /></td>
    <td><code>string</code></td>
    <td>Returns the name for the business associated with this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns the timestamp for creation date and time of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="logGroupName" /></td>
    <td><code>string</code></td>
    <td>Returns the name of the logging group.</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>string</code></td>
    <td>Specifies whether or not logging is enabled for this profile. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns the timestamp that identifies the most recent date and time that the profile was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="profileId" /></td>
    <td><code>string</code></td>
    <td>Returns the unique, system-generated identifier for the profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details for the profile specified by the profile ID. A profile is the mechanism used to create the concept of a private network.</td>
</tr>
<tr>
    <td><a href="#list_profiles"><CopyableCode code="list_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the profiles associated with your Amazon Web Services account for your current or specified region. A profile is the mechanism used to create the concept of a private network.</td>
</tr>
<tr>
    <td><a href="#create_profile"><CopyableCode code="create_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-phone"><code>phone</code></a>, <a href="#parameter-businessName"><code>businessName</code></a>, <a href="#parameter-logging"><code>logging</code></a></td>
    <td></td>
    <td>Creates a customer profile. You can have up to five customer profiles, each representing a distinct private network. A profile is the mechanism used to create the concept of a private network.</td>
</tr>
<tr>
    <td><a href="#update_profile"><CopyableCode code="update_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-profileId"><code>profileId</code></a></td>
    <td></td>
    <td>Updates the specified parameters for a profile. A profile is the mechanism used to create the concept of a private network.</td>
</tr>
<tr>
    <td><a href="#delete_profile"><CopyableCode code="delete_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified profile. A profile is the mechanism used to create the concept of a private network.</td>
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
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' },
        { label: 'list_profiles', value: 'list_profiles' }
    ]}
>
<TabItem value="get_profile">

Retrieves the details for the profile specified by the profile ID. A profile is the mechanism used to create the concept of a private network.

```sql
SELECT
name,
businessName,
createdAt,
email,
logGroupName,
logging,
modifiedAt,
phone,
profileArn,
profileId
FROM aws.b2bi.profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profiles">

Lists the profiles associated with your Amazon Web Services account for your current or specified region. A profile is the mechanism used to create the concept of a private network.

```sql
SELECT
name,
businessName,
createdAt,
logGroupName,
logging,
modifiedAt,
profileId
FROM aws.b2bi.profiles
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

Creates a customer profile. You can have up to five customer profiles, each representing a distinct private network. A profile is the mechanism used to create the concept of a private network.

```sql
INSERT INTO aws.b2bi.profiles (
name,
email,
phone,
businessName,
logging,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ email }}',
'{{ phone }}' /* required */,
'{{ businessName }}' /* required */,
'{{ logging }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
businessName,
createdAt,
email,
logGroupName,
logging,
phone,
profileArn,
profileId
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
      description: |
        Specifies the name of the profile.
    - name: email
      value: "{{ email }}"
      description: |
        Specifies the email address associated with this customer profile.
    - name: phone
      value: "{{ phone }}"
      description: |
        Specifies the phone number associated with the profile.
    - name: businessName
      value: "{{ businessName }}"
      description: |
        Specifies the name for the business associated with this profile.
    - name: logging
      value: "{{ logging }}"
      description: |
        Specifies whether or not logging is enabled for this profile.
      valid_values: ['ENABLED', 'DISABLED']
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Reserved for future use.
    - name: tags
      description: |
        Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
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

Updates the specified parameters for a profile. A profile is the mechanism used to create the concept of a private network.

```sql
UPDATE aws.b2bi.profiles
SET 
profileId = '{{ profileId }}',
name = '{{ name }}',
email = '{{ email }}',
phone = '{{ phone }}',
businessName = '{{ businessName }}'
WHERE 
region = '{{ region }}' --required
AND profileId = '{{ profileId }}' --required
RETURNING
name,
businessName,
createdAt,
email,
logGroupName,
logging,
modifiedAt,
phone,
profileArn,
profileId;
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

Deletes the specified profile. A profile is the mechanism used to create the concept of a private network.

```sql
DELETE FROM aws.b2bi.profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
