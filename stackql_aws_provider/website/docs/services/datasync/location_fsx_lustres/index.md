--- 
title: location_fsx_lustres
hide_title: false
hide_table_of_contents: false
keywords:
  - location_fsx_lustres
  - datasync
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

Creates, updates, deletes, gets or lists a <code>location_fsx_lustres</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_fsx_lustres" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_fsx_lustres" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_fsx_lustre"
    values={[
        { label: 'describe_location_fsx_lustre', value: 'describe_location_fsx_lustre' }
    ]}
>
<TabItem value="describe_location_fsx_lustre">

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
    <td>The time that the FSx for Lustre location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the FSx for Lustre location that was described. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_uri" /></td>
    <td><code>string</code></td>
    <td>The URI of the FSx for Lustre location that was described. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the security groups that are configured for the FSx for Lustre file system.</td>
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
    <td><a href="#describe_location_fsx_lustre"><CopyableCode code="describe_location_fsx_lustre" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for an Amazon FSx for Lustre file system is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_fsx_lustre"><CopyableCode code="create_location_fsx_lustre" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FsxFilesystemArn"><code>FsxFilesystemArn</code></a>, <a href="#parameter-SecurityGroupArns"><code>SecurityGroupArns</code></a></td>
    <td></td>
    <td>Creates a transfer location for an Amazon FSx for Lustre file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for Lustre file systems.</td>
</tr>
<tr>
    <td><a href="#update_location_fsx_lustre"><CopyableCode code="update_location_fsx_lustre" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Amazon FSx for Lustre transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with FSx for Lustre.</td>
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
    defaultValue="describe_location_fsx_lustre"
    values={[
        { label: 'describe_location_fsx_lustre', value: 'describe_location_fsx_lustre' }
    ]}
>
<TabItem value="describe_location_fsx_lustre">

Provides details about how an DataSync transfer location for an Amazon FSx for Lustre file system is configured.

```sql
SELECT
creation_time,
location_arn,
location_uri,
security_group_arns
FROM aws.datasync.location_fsx_lustres
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_fsx_lustre"
    values={[
        { label: 'create_location_fsx_lustre', value: 'create_location_fsx_lustre' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_fsx_lustre">

Creates a transfer location for an Amazon FSx for Lustre file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for Lustre file systems.

```sql
INSERT INTO aws.datasync.location_fsx_lustres (
FsxFilesystemArn,
SecurityGroupArns,
Subdirectory,
Tags,
region
)
SELECT 
'{{ FsxFilesystemArn }}' /* required */,
'{{ SecurityGroupArns }}' /* required */,
'{{ Subdirectory }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
location_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_fsx_lustres
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_fsx_lustres resource.
    - name: FsxFilesystemArn
      value: "{{ FsxFilesystemArn }}"
      description: |
        Specifies the Amazon Resource Name (ARN) of the FSx for Lustre file system.
    - name: SecurityGroupArns
      value:
        - "{{ SecurityGroupArns }}"
      description: |
        Specifies the Amazon Resource Names (ARNs) of up to five security groups that provide access to your FSx for Lustre file system. The security groups must be able to access the file system's ports. The file system must also allow access from the security groups. For information about file system access, see the Amazon FSx for Lustre User Guide .
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies a mount path for your FSx for Lustre file system. The path can include subdirectories. When the location is used as a source, DataSync reads data from the mount path. When the location is used as a destination, DataSync writes data to the mount path. If you don't include this parameter, DataSync uses the file system's root directory (/).
    - name: Tags
      description: |
        Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_fsx_lustre"
    values={[
        { label: 'update_location_fsx_lustre', value: 'update_location_fsx_lustre' }
    ]}
>
<TabItem value="update_location_fsx_lustre">

Modifies the following configuration parameters of the Amazon FSx for Lustre transfer location that you're using with DataSync. For more information, see Configuring DataSync transfers with FSx for Lustre.

```sql
UPDATE aws.datasync.location_fsx_lustres
SET 
LocationArn = '{{ LocationArn }}',
Subdirectory = '{{ Subdirectory }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
