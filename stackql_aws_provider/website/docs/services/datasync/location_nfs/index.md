--- 
title: location_nfs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_nfs
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

Creates, updates, deletes, gets or lists a <code>location_nfs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_nfs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_nfs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_nfs"
    values={[
        { label: 'describe_location_nfs', value: 'describe_location_nfs' }
    ]}
>
<TabItem value="describe_location_nfs">

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
    <td>The time when the NFS location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LocationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the NFS location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LocationUri" /></td>
    <td><code>string</code></td>
    <td>The URI of the NFS location. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MountOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies how DataSync can access a location using the NFS protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="OnPremConfig" /></td>
    <td><code>object</code></td>
    <td>The DataSync agents that can connect to your Network File System (NFS) file server.</td>
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
    <td><a href="#describe_location_nfs"><CopyableCode code="describe_location_nfs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for a Network File System (NFS) file server is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_nfs"><CopyableCode code="create_location_nfs" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Subdirectory"><code>Subdirectory</code></a>, <a href="#parameter-ServerHostname"><code>ServerHostname</code></a>, <a href="#parameter-OnPremConfig"><code>OnPremConfig</code></a></td>
    <td></td>
    <td>Creates a transfer location for a Network File System (NFS) file server. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses NFS file servers.</td>
</tr>
<tr>
    <td><a href="#update_location_nfs"><CopyableCode code="update_location_nfs" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Network File System (NFS) transfer location that you're using with DataSync. For more information, see Configuring transfers with an NFS file server.</td>
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
    defaultValue="describe_location_nfs"
    values={[
        { label: 'describe_location_nfs', value: 'describe_location_nfs' }
    ]}
>
<TabItem value="describe_location_nfs">

Provides details about how an DataSync transfer location for a Network File System (NFS) file server is configured.

```sql
SELECT
CreationTime,
LocationArn,
LocationUri,
MountOptions,
OnPremConfig
FROM aws.datasync.location_nfs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_nfs"
    values={[
        { label: 'create_location_nfs', value: 'create_location_nfs' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_nfs">

Creates a transfer location for a Network File System (NFS) file server. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses NFS file servers.

```sql
INSERT INTO aws.datasync.location_nfs (
Subdirectory,
ServerHostname,
OnPremConfig,
MountOptions,
Tags,
region
)
SELECT 
'{{ Subdirectory }}' /* required */,
'{{ ServerHostname }}' /* required */,
'{{ OnPremConfig }}' /* required */,
'{{ MountOptions }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
LocationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_nfs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_nfs resource.
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies the export path in your NFS file server that you want DataSync to mount. This path (or a subdirectory of the path) is where DataSync transfers data to or from. For information on configuring an export for DataSync, see Accessing NFS file servers.
    - name: ServerHostname
      value: "{{ ServerHostname }}"
      description: |
        Specifies the DNS name or IP address (IPv4 or IPv6) of the NFS file server that your DataSync agent connects to.
    - name: OnPremConfig
      description: |
        Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect to your NFS file server. You can specify more than one agent. For more information, see Using multiple DataSync agents.
      value:
        AgentArns:
          - "{{ AgentArns }}"
    - name: MountOptions
      description: |
        Specifies how DataSync can access a location using the NFS protocol.
      value:
        Version: "{{ Version }}"
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
    defaultValue="update_location_nfs"
    values={[
        { label: 'update_location_nfs', value: 'update_location_nfs' }
    ]}
>
<TabItem value="update_location_nfs">

Modifies the following configuration parameters of the Network File System (NFS) transfer location that you're using with DataSync. For more information, see Configuring transfers with an NFS file server.

```sql
UPDATE aws.datasync.location_nfs
SET 
LocationArn = '{{ LocationArn }}',
Subdirectory = '{{ Subdirectory }}',
ServerHostname = '{{ ServerHostname }}',
OnPremConfig = '{{ OnPremConfig }}',
MountOptions = '{{ MountOptions }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
