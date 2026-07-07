--- 
title: profile_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_associations
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

Creates, updates, deletes, gets or lists a <code>profile_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53profiles.profile_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile_association"
    values={[
        { label: 'get_profile_association', value: 'get_profile_association' },
        { label: 'list_profile_associations', value: 'list_profile_associations' }
    ]}
>
<TabItem value="get_profile_association">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile association was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile association.</td>
</tr>
<tr>
    <td><CopyableCode code="ModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile association was modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the Profile association. (pattern: &lt;code&gt;^(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services account ID of the Profile association owner.</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileId" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the Profile association. (COMPLETE, DELETING, UPDATING, CREATING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Additional information about the Profile association.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_profile_associations">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile association was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile association.</td>
</tr>
<tr>
    <td><CopyableCode code="ModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Profile association was modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the Profile association. (pattern: &lt;code&gt;^(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services account ID of the Profile association owner.</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileId" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the Profile association. (COMPLETE, DELETING, UPDATING, CREATING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Additional information about the Profile association.</td>
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
    <td><a href="#get_profile_association"><CopyableCode code="get_profile_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_association_id"><code>profile_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a Route 53 Profile association for a VPC. A VPC can have only one Profile association, but a Profile can be associated with up to 5000 VPCs.</td>
</tr>
<tr>
    <td><a href="#list_profile_associations"><CopyableCode code="list_profile_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-profileId"><code>profileId</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a></td>
    <td>Lists all the VPCs that the specified Route 53 Profile is associated with.</td>
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
<tr id="parameter-profile_association_id">
    <td><CopyableCode code="profile_association_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the association you want to get information about.</td>
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
<tr id="parameter-profileId">
    <td><CopyableCode code="profileId" /></td>
    <td><code>string</code></td>
    <td>ID of the Profile.</td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>ID of the VPC.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_profile_association"
    values={[
        { label: 'get_profile_association', value: 'get_profile_association' },
        { label: 'list_profile_associations', value: 'list_profile_associations' }
    ]}
>
<TabItem value="get_profile_association">

Retrieves a Route 53 Profile association for a VPC. A VPC can have only one Profile association, but a Profile can be associated with up to 5000 VPCs.

```sql
SELECT
CreationTime,
Id,
ModificationTime,
Name,
OwnerId,
ProfileId,
ResourceId,
Status,
StatusMessage
FROM aws.route53profiles.profile_associations
WHERE profile_association_id = '{{ profile_association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profile_associations">

Lists all the VPCs that the specified Route 53 Profile is associated with.

```sql
SELECT
CreationTime,
Id,
ModificationTime,
Name,
OwnerId,
ProfileId,
ResourceId,
Status,
StatusMessage
FROM aws.route53profiles.profile_associations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND profileId = '{{ profileId }}'
AND resourceId = '{{ resourceId }}'
;
```
</TabItem>
</Tabs>
