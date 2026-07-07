--- 
title: s3_access_point_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - s3_access_point_attachments
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

Creates, updates, deletes, gets or lists a <code>s3_access_point_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="s3_access_point_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.s3_access_point_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_s3_access_point_attachments"
    values={[
        { label: 'describe_s3_access_point_attachments', value: 'describe_s3_access_point_attachments' }
    ]}
>
<TabItem value="describe_s3_access_point_attachments">

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
    <td>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="Lifecycle" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the S3 access point attachment. The lifecycle can have the following values: AVAILABLE - the S3 access point attachment is available for use CREATING - Amazon FSx is creating the S3 access point and attachment DELETING - Amazon FSx is deleting the S3 access point and attachment FAILED - The S3 access point attachment is in a failed state. Delete and detach the S3 access point attachment, and create a new one. UPDATING - Amazon FSx is updating the S3 access point attachment (AVAILABLE, CREATING, DELETING, UPDATING, FAILED, MISCONFIGURED)</td>
</tr>
<tr>
    <td><CopyableCode code="LifecycleTransitionReason" /></td>
    <td><code>object</code></td>
    <td>Describes why a resource lifecycle state changed.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 access point attachment; also used for the name of the S3 access point. (pattern: &lt;code&gt;^(?=&#91;a-z0-9&#93;)&#91;a-z0-9-&#93;&#123;1,48&#125;&#91;a-z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OntapConfiguration" /></td>
    <td><code>object</code></td>
    <td>The ONTAP configuration of the S3 access point attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenZFSConfiguration" /></td>
    <td><code>object</code></td>
    <td>The OpenZFSConfiguration of the S3 access point attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="S3AccessPoint" /></td>
    <td><code>object</code></td>
    <td>The S3 access point configuration of the S3 access point attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon FSx volume that the S3 access point is attached to. (OPENZFS, ONTAP)</td>
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
    <td><a href="#describe_s3_access_point_attachments"><CopyableCode code="describe_s3_access_point_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more S3 access points attached to Amazon FSx volumes. The requester requires the following permission to perform this action: fsx:DescribeS3AccessPointAttachments</td>
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
    defaultValue="describe_s3_access_point_attachments"
    values={[
        { label: 'describe_s3_access_point_attachments', value: 'describe_s3_access_point_attachments' }
    ]}
>
<TabItem value="describe_s3_access_point_attachments">

Describes one or more S3 access points attached to Amazon FSx volumes. The requester requires the following permission to perform this action: fsx:DescribeS3AccessPointAttachments

```sql
SELECT
CreationTime,
Lifecycle,
LifecycleTransitionReason,
Name,
OntapConfiguration,
OpenZFSConfiguration,
S3AccessPoint,
Type
FROM aws.fsx.s3_access_point_attachments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
