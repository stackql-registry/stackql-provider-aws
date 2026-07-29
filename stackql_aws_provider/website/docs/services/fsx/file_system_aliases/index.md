--- 
title: file_system_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - file_system_aliases
  - fsx
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

Creates, updates, deletes, gets or lists a <code>file_system_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_system_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.file_system_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_file_system_aliases"
    values={[
        { label: 'describe_file_system_aliases', value: 'describe_file_system_aliases' }
    ]}
>
<TabItem value="describe_file_system_aliases">

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
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>An array of one or more DNS aliases that are currently associated with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see Managing DNS aliases.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off. (pattern: &lt;code&gt;^(?:&#91;A-Za-z0-9+\/&#93;&#123;4&#125;)*(?:&#91;A-Za-z0-9+\/&#93;&#123;2&#125;==|&#91;A-Za-z0-9+\/&#93;&#123;3&#125;=)?$&lt;/code&gt;)</td>
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
    <td><a href="#describe_file_system_aliases"><CopyableCode code="describe_file_system_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of AdministrativeAction provided in the DescribeFileSystems operation response.</td>
</tr>
<tr>
    <td><a href="#associate_file_system_aliases"><CopyableCode code="associate_file_system_aliases" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td></td>
    <td>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see Working with DNS Aliases and Walkthrough 5: Using DNS aliases to access your file system, including additional steps you must take to be able to access your file system using a DNS alias. The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.</td>
</tr>
<tr>
    <td><a href="#disassociate_file_system_aliases"><CopyableCode code="disassociate_file_system_aliases" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a></td>
    <td></td>
    <td>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with an HTTP status code 400 (Bad Request). For more information, see Working with DNS Aliases. The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</td>
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
    defaultValue="describe_file_system_aliases"
    values={[
        { label: 'describe_file_system_aliases', value: 'describe_file_system_aliases' }
    ]}
>
<TabItem value="describe_file_system_aliases">

Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of AdministrativeAction provided in the DescribeFileSystems operation response.

```sql
SELECT
aliases,
next_token
FROM aws.fsx.file_system_aliases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_file_system_aliases"
    values={[
        { label: 'associate_file_system_aliases', value: 'associate_file_system_aliases' }
    ]}
>
<TabItem value="associate_file_system_aliases">

Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see Working with DNS Aliases and Walkthrough 5: Using DNS aliases to access your file system, including additional steps you must take to be able to access your file system using a DNS alias. The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.

```sql
UPDATE aws.fsx.file_system_aliases
SET 
ClientRequestToken = '{{ ClientRequestToken }}',
FileSystemId = '{{ FileSystemId }}',
Aliases = '{{ Aliases }}'
WHERE 
region = '{{ region }}' --required
AND FileSystemId = '{{ FileSystemId }}' --required
RETURNING
aliases;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_file_system_aliases"
    values={[
        { label: 'disassociate_file_system_aliases', value: 'disassociate_file_system_aliases' }
    ]}
>
<TabItem value="disassociate_file_system_aliases">

Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with an HTTP status code 400 (Bad Request). For more information, see Working with DNS Aliases. The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.

```sql
EXEC aws.fsx.file_system_aliases.disassociate_file_system_aliases 
@region='{{ region }}' --required 
@@json=
'{
"ClientRequestToken": "{{ ClientRequestToken }}", 
"FileSystemId": "{{ FileSystemId }}", 
"Aliases": "{{ Aliases }}"
}'
;
```
</TabItem>
</Tabs>
