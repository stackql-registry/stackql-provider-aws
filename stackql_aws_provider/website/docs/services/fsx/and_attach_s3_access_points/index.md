--- 
title: and_attach_s3_access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - and_attach_s3_access_points
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

Creates, updates, deletes, gets or lists an <code>and_attach_s3_access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="and_attach_s3_access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.and_attach_s3_access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_and_attach_s3_access_point"><CopyableCode code="create_and_attach_s3_access_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Type"><code>Type</code></a></td>
    <td></td>
    <td>Creates an S3 access point and attaches it to an Amazon FSx volume. For FSx for OpenZFS file systems, the volume must be hosted on a high-availability file system, either Single-AZ or Multi-AZ. For more information, see Accessing your data using Amazon S3 access points. in the Amazon FSx for OpenZFS User Guide. The requester requires the following permissions to perform these actions: fsx:CreateAndAttachS3AccessPoint s3:CreateAccessPoint s3:GetAccessPoint s3:PutAccessPointPolicy s3:DeleteAccessPoint The following actions are related to CreateAndAttachS3AccessPoint: DescribeS3AccessPointAttachments DetachAndDeleteS3AccessPoint</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_and_attach_s3_access_point"
    values={[
        { label: 'create_and_attach_s3_access_point', value: 'create_and_attach_s3_access_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_and_attach_s3_access_point">

Creates an S3 access point and attaches it to an Amazon FSx volume. For FSx for OpenZFS file systems, the volume must be hosted on a high-availability file system, either Single-AZ or Multi-AZ. For more information, see Accessing your data using Amazon S3 access points. in the Amazon FSx for OpenZFS User Guide. The requester requires the following permissions to perform these actions: fsx:CreateAndAttachS3AccessPoint s3:CreateAccessPoint s3:GetAccessPoint s3:PutAccessPointPolicy s3:DeleteAccessPoint The following actions are related to CreateAndAttachS3AccessPoint: DescribeS3AccessPointAttachments DetachAndDeleteS3AccessPoint

```sql
INSERT INTO aws.fsx.and_attach_s3_access_points (
ClientRequestToken,
Name,
Type,
OpenZFSConfiguration,
OntapConfiguration,
S3AccessPoint,
region
)
SELECT 
'{{ ClientRequestToken }}',
'{{ Name }}' /* required */,
'{{ Type }}' /* required */,
'{{ OpenZFSConfiguration }}',
'{{ OntapConfiguration }}',
'{{ S3AccessPoint }}',
'{{ region }}'
RETURNING
s3_access_point_attachment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: and_attach_s3_access_points
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the and_attach_s3_access_points resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name you want to assign to this S3 access point.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of S3 access point you want to create. Only OpenZFS is supported.
      valid_values: ['OPENZFS', 'ONTAP']
    - name: OpenZFSConfiguration
      description: |
        Specifies the configuration to use when creating and attaching an S3 access point to an FSx for OpenZFS volume.
      value:
        VolumeId: "{{ VolumeId }}"
        FileSystemIdentity:
          Type: "{{ Type }}"
          PosixUser:
            Uid: {{ Uid }}
            Gid: {{ Gid }}
            SecondaryGids:
              - {{ SecondaryGids }}
    - name: OntapConfiguration
      description: |
        Specifies the FSx for ONTAP volume that the S3 access point will be attached to, and the file system user identity.
      value:
        VolumeId: "{{ VolumeId }}"
        FileSystemIdentity:
          Type: "{{ Type }}"
          UnixUser:
            Name: "{{ Name }}"
          WindowsUser:
            Name: "{{ Name }}"
    - name: S3AccessPoint
      description: |
        Specifies the virtual private cloud (VPC) configuration if you're creating an access point that is restricted to a VPC. For more information, see Creating access points restricted to a virtual private cloud.
      value:
        VpcConfiguration:
          VpcId: "{{ VpcId }}"
        Policy: "{{ Policy }}"
`}</CodeBlock>

</TabItem>
</Tabs>
