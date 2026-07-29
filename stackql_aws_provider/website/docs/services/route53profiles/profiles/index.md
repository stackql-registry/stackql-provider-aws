--- 
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
  - route53profiles
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53profiles.profiles" /></td></tr>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Profile.</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>The ClientToken value that was assigned when the Profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile was modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Profile. (pattern: &lt;code&gt;^(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services account ID of the Profile owner.</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>Sharing status for the Profile. (NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status for the Profile. (COMPLETE, DELETING, UPDATING, CREATING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Status message that includes additiona information about the Profile.</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Profile.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Profile. (pattern: &lt;code&gt;^(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>Share status of the Profile. (NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)</td>
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
    <td>Returns information about a specified Route 53 Profile, such as whether whether the Profile is shared, and the current status of the Profile.</td>
</tr>
<tr>
    <td><a href="#list_profiles"><CopyableCode code="list_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all the Route 53 Profiles associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_profile"><CopyableCode code="create_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates an empty Route 53 Profile.</td>
</tr>
<tr>
    <td><a href="#associate_profile"><CopyableCode code="associate_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileId"><code>ProfileId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>Associates a Route 53 Profiles profile with a VPC. A VPC can have only one Profile associated with it, but a Profile can be associated with 1000 of VPCs (and you can request a higher quota). For more information, see https:​//docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities.</td>
</tr>
<tr>
    <td><a href="#associate_resource_to_profile"><CopyableCode code="associate_resource_to_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileId"><code>ProfileId</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Associates a DNS reource configuration to a Route 53 Profile.</td>
</tr>
<tr>
    <td><a href="#disassociate_profile"><CopyableCode code="disassociate_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Dissociates a specified Route 53 Profile from the specified VPC.</td>
</tr>
<tr>
    <td><a href="#disassociate_resource_from_profile"><CopyableCode code="disassociate_resource_from_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Dissoaciated a specified resource, from the Route 53 Profile.</td>
</tr>
<tr>
    <td><a href="#delete_profile"><CopyableCode code="delete_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Route 53 Profile. Before you can delete a profile, you must first disassociate it from all VPCs.</td>
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
<tr id="parameter-profile_id">
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Profile that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects that you want to return for this request. If more objects are available, in the response, a NextToken value, which you can use in a subsequent call to get the next batch of objects, is provided. If you don't specify a value for MaxResults, up to 100 objects are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>For the first call to this list request, omit this value. When you request a list of objects, at most the number of objects specified by MaxResults is returned. If more objects are available for retrieval, a NextToken value is returned in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</td>
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

Returns information about a specified Route 53 Profile, such as whether whether the Profile is shared, and the current status of the Profile.

```sql
SELECT
arn,
client_token,
creation_time,
id,
modification_time,
name,
owner_id,
share_status,
status,
status_message
FROM aws.route53profiles.profiles
WHERE profile_id = '{{ profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profiles">

Lists all the Route 53 Profiles associated with your Amazon Web Services account.

```sql
SELECT
arn,
id,
name,
share_status
FROM aws.route53profiles.profiles
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
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

Creates an empty Route 53 Profile.

```sql
INSERT INTO aws.route53profiles.profiles (
ClientToken,
Name,
Tags,
region
)
SELECT 
'{{ ClientToken }}' /* required */,
'{{ Name }}',
'{{ Tags }}',
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
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_profile"
    values={[
        { label: 'associate_profile', value: 'associate_profile' },
        { label: 'associate_resource_to_profile', value: 'associate_resource_to_profile' },
        { label: 'disassociate_profile', value: 'disassociate_profile' },
        { label: 'disassociate_resource_from_profile', value: 'disassociate_resource_from_profile' }
    ]}
>
<TabItem value="associate_profile">

Associates a Route 53 Profiles profile with a VPC. A VPC can have only one Profile associated with it, but a Profile can be associated with 1000 of VPCs (and you can request a higher quota). For more information, see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities.

```sql
UPDATE aws.route53profiles.profiles
SET 
Name = '{{ Name }}',
ProfileId = '{{ ProfileId }}',
ResourceId = '{{ ResourceId }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ProfileId = '{{ ProfileId }}' --required
AND ResourceId = '{{ ResourceId }}' --required
RETURNING
profile_association;
```
</TabItem>
<TabItem value="associate_resource_to_profile">

Associates a DNS reource configuration to a Route 53 Profile.

```sql
UPDATE aws.route53profiles.profiles
SET 
Name = '{{ Name }}',
ProfileId = '{{ ProfileId }}',
ResourceArn = '{{ ResourceArn }}',
ResourceProperties = '{{ ResourceProperties }}'
WHERE 
region = '{{ region }}' --required
AND ProfileId = '{{ ProfileId }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
RETURNING
profile_resource_association;
```
</TabItem>
<TabItem value="disassociate_profile">

Dissociates a specified Route 53 Profile from the specified VPC.

```sql
UPDATE aws.route53profiles.profiles
SET 
-- No updatable properties
WHERE 
profile_id = '{{ profile_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND region = '{{ region }}' --required
RETURNING
profile_association;
```
</TabItem>
<TabItem value="disassociate_resource_from_profile">

Dissoaciated a specified resource, from the Route 53 Profile.

```sql
UPDATE aws.route53profiles.profiles
SET 
-- No updatable properties
WHERE 
profile_id = '{{ profile_id }}' --required
AND resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
profile_resource_association;
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

Deletes the specified Route 53 Profile. Before you can delete a profile, you must first disassociate it from all VPCs.

```sql
DELETE FROM aws.route53profiles.profiles
WHERE profile_id = '{{ profile_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
