--- 
title: profile_resource_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_resource_associations
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

Creates, updates, deletes, gets or lists a <code>profile_resource_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_resource_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53profiles.profile_resource_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile_resource_association"
    values={[
        { label: 'get_profile_resource_association', value: 'get_profile_resource_association' },
        { label: 'list_profile_resource_associations', value: 'list_profile_resource_associations' }
    ]}
>
<TabItem value="get_profile_resource_association">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile resource association was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile resource association.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile resource association was modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Profile resource association. (pattern: &lt;code&gt;^(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services account ID of the Profile resource association owner.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>Profile ID of the Profile that the resources are associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource association.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_properties" /></td>
    <td><code>string</code></td>
    <td>If the DNS resource is a DNS Firewall rule group, this indicates the priority.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Resource type, such as a private hosted zone, or DNS Firewall rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Profile resource association. (COMPLETE, DELETING, UPDATING, CREATING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the Profile resource association.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_profile_resource_associations">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile resource association was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile resource association.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile resource association was modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Profile resource association. (pattern: &lt;code&gt;^(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services account ID of the Profile resource association owner.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>Profile ID of the Profile that the resources are associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource association.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_properties" /></td>
    <td><code>string</code></td>
    <td>If the DNS resource is a DNS Firewall rule group, this indicates the priority.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Resource type, such as a private hosted zone, or DNS Firewall rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Profile resource association. (COMPLETE, DELETING, UPDATING, CREATING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the Profile resource association.</td>
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
    <td><a href="#get_profile_resource_association"><CopyableCode code="get_profile_resource_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_resource_association_id"><code>profile_resource_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specified Route 53 Profile resource association.</td>
</tr>
<tr>
    <td><a href="#list_profile_resource_associations"><CopyableCode code="list_profile_resource_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a></td>
    <td>Lists all the resource associations for the specified Route 53 Profile.</td>
</tr>
<tr>
    <td><a href="#update_profile_resource_association"><CopyableCode code="update_profile_resource_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_resource_association_id"><code>profile_resource_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified Route 53 Profile resourse association.</td>
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
    <td>The ID of the Profile.</td>
</tr>
<tr id="parameter-profile_resource_association_id">
    <td><CopyableCode code="profile_resource_association_id" /></td>
    <td><code>string</code></td>
    <td>ID of the resource association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>ID of a resource if you want information on only one type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_profile_resource_association"
    values={[
        { label: 'get_profile_resource_association', value: 'get_profile_resource_association' },
        { label: 'list_profile_resource_associations', value: 'list_profile_resource_associations' }
    ]}
>
<TabItem value="get_profile_resource_association">

Returns information about a specified Route 53 Profile resource association.

```sql
SELECT
creation_time,
id,
modification_time,
name,
owner_id,
profile_id,
resource_arn,
resource_properties,
resource_type,
status,
status_message
FROM aws.route53profiles.profile_resource_associations
WHERE profile_resource_association_id = '{{ profile_resource_association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profile_resource_associations">

Lists all the resource associations for the specified Route 53 Profile.

```sql
SELECT
creation_time,
id,
modification_time,
name,
owner_id,
profile_id,
resource_arn,
resource_properties,
resource_type,
status,
status_message
FROM aws.route53profiles.profile_resource_associations
WHERE profile_id = '{{ profile_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND resourceType = '{{ resourceType }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_profile_resource_association"
    values={[
        { label: 'update_profile_resource_association', value: 'update_profile_resource_association' }
    ]}
>
<TabItem value="update_profile_resource_association">

Updates the specified Route 53 Profile resourse association.

```sql
UPDATE aws.route53profiles.profile_resource_associations
SET 
Name = '{{ Name }}',
ResourceProperties = '{{ ResourceProperties }}'
WHERE 
profile_resource_association_id = '{{ profile_resource_association_id }}' --required
AND region = '{{ region }}' --required
RETURNING
profile_resource_association;
```
</TabItem>
</Tabs>
