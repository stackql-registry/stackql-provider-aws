--- 
title: accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - accesses
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

Creates, updates, deletes, gets or lists an <code>accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.accesses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_accesses"
    values={[
        { label: 'list_accesses', value: 'list_accesses' }
    ]}
>
<TabItem value="list_accesses">

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
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell. Get-ADGroup -Filter &#123;samAccountName -like "YourGroupName*"&#125; -Properties * | Select SamAccountName,ObjectSid In that command, replace YourGroupName with the name of your Active Directory group. The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/- (pattern: &lt;code&gt;S-1-&#91;\d-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="home_directory" /></td>
    <td><code>string</code></td>
    <td>The landing directory (folder) for a user when they log in to the server using the client. A HomeDirectory example is /bucket_name/home/mydirectory. You can use the HomeDirectory parameter for HomeDirectoryType when it is set to either PATH or LOGICAL. (pattern: &lt;code&gt;(|/.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="home_directory_type" /></td>
    <td><code>string</code></td>
    <td>The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to PATH, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to LOGICAL, you need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 or Amazon EFS paths visible to your users. If HomeDirectoryType is LOGICAL, you must provide mappings, using the HomeDirectoryMappings parameter. If, on the other hand, HomeDirectoryType is PATH, you provide an absolute path using the HomeDirectory parameter. You cannot have both HomeDirectory and HomeDirectoryMappings in your template. (PATH, LOGICAL)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests. (pattern: &lt;code&gt;arn:.*role/\S+&lt;/code&gt;)</td>
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
    <td><a href="#list_accesses"><CopyableCode code="list_accesses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the details for all the accesses you have on your server.</td>
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
    defaultValue="list_accesses"
    values={[
        { label: 'list_accesses', value: 'list_accesses' }
    ]}
>
<TabItem value="list_accesses">

Lists the details for all the accesses you have on your server.

```sql
SELECT
external_id,
home_directory,
home_directory_type,
role
FROM aws.transfer.accesses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
