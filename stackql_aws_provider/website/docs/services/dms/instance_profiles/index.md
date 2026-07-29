--- 
title: instance_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_profiles
  - dms
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

Creates, updates, deletes, gets or lists an <code>instance_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.instance_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_profiles"
    values={[
        { label: 'describe_instance_profiles', value: 'describe_instance_profiles' }
    ]}
>
<TabItem value="describe_instance_profiles">

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
    <td><CopyableCode code="instance_profiles" /></td>
    <td><code>array</code></td>
    <td>A description of instance profiles.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.</td>
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
    <td><a href="#describe_instance_profiles"><CopyableCode code="describe_instance_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of instance profiles for your account in the current region.</td>
</tr>
<tr>
    <td><a href="#create_instance_profile"><CopyableCode code="create_instance_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates the instance profile using the specified parameters.</td>
</tr>
<tr>
    <td><a href="#modify_instance_profile"><CopyableCode code="modify_instance_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceProfileIdentifier"><code>InstanceProfileIdentifier</code></a></td>
    <td></td>
    <td>Modifies the specified instance profile using the provided parameters. All migration projects associated with the instance profile must be deleted or modified before you can modify the instance profile.</td>
</tr>
<tr>
    <td><a href="#delete_instance_profile"><CopyableCode code="delete_instance_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified instance profile. All migration projects associated with the instance profile must be deleted or modified before you can delete the instance profile.</td>
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
    defaultValue="describe_instance_profiles"
    values={[
        { label: 'describe_instance_profiles', value: 'describe_instance_profiles' }
    ]}
>
<TabItem value="describe_instance_profiles">

Returns a paginated list of instance profiles for your account in the current region.

```sql
SELECT
instance_profiles,
marker
FROM aws.dms.instance_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance_profile"
    values={[
        { label: 'create_instance_profile', value: 'create_instance_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance_profile">

Creates the instance profile using the specified parameters.

```sql
INSERT INTO aws.dms.instance_profiles (
AvailabilityZone,
KmsKeyArn,
PubliclyAccessible,
Tags,
NetworkType,
InstanceProfileName,
Description,
SubnetGroupIdentifier,
VpcSecurityGroups,
region
)
SELECT 
'{{ AvailabilityZone }}',
'{{ KmsKeyArn }}',
{{ PubliclyAccessible }},
'{{ Tags }}',
'{{ NetworkType }}',
'{{ InstanceProfileName }}',
'{{ Description }}',
'{{ SubnetGroupIdentifier }}',
'{{ VpcSecurityGroups }}',
'{{ region }}'
RETURNING
instance_profile
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_profiles resource.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: |
        The Availability Zone where the instance profile will be created. The default value is a random, system-chosen Availability Zone in the Amazon Web Services Region where your data provider is created, for examplem us-east-1d.
    - name: KmsKeyArn
      value: "{{ KmsKeyArn }}"
      description: |
        The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile. If you don't specify a value for the KmsKeyArn parameter, then DMS uses an Amazon Web Services owned encryption key to encrypt your resources.
    - name: PubliclyAccessible
      value: {{ PubliclyAccessible }}
      description: |
        Specifies the accessibility options for the instance profile. A value of true represents an instance profile with a public IP address. A value of false represents an instance profile with a private IP address. The default value is true.
    - name: Tags
      description: |
        One or more tags to be assigned to the instance profile.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        Specifies the network type for the instance profile. A value of IPV4 represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of IPV6 represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of DUAL represents an instance profile with dual network type that supports IPv4 and IPv6 addressing.
    - name: InstanceProfileName
      value: "{{ InstanceProfileName }}"
      description: |
        A user-friendly name for the instance profile.
    - name: Description
      value: "{{ Description }}"
      description: |
        A user-friendly description of the instance profile.
    - name: SubnetGroupIdentifier
      value: "{{ SubnetGroupIdentifier }}"
      description: |
        A subnet group to associate with the instance profile.
    - name: VpcSecurityGroups
      value:
        - "{{ VpcSecurityGroups }}"
      description: |
        Specifies the VPC security group names to be used with the instance profile. The VPC security group must work with the VPC containing the instance profile.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_instance_profile"
    values={[
        { label: 'modify_instance_profile', value: 'modify_instance_profile' }
    ]}
>
<TabItem value="modify_instance_profile">

Modifies the specified instance profile using the provided parameters. All migration projects associated with the instance profile must be deleted or modified before you can modify the instance profile.

```sql
UPDATE aws.dms.instance_profiles
SET 
InstanceProfileIdentifier = '{{ InstanceProfileIdentifier }}',
AvailabilityZone = '{{ AvailabilityZone }}',
KmsKeyArn = '{{ KmsKeyArn }}',
PubliclyAccessible = {{ PubliclyAccessible }},
NetworkType = '{{ NetworkType }}',
InstanceProfileName = '{{ InstanceProfileName }}',
Description = '{{ Description }}',
SubnetGroupIdentifier = '{{ SubnetGroupIdentifier }}',
VpcSecurityGroups = '{{ VpcSecurityGroups }}'
WHERE 
region = '{{ region }}' --required
AND InstanceProfileIdentifier = '{{ InstanceProfileIdentifier }}' --required
RETURNING
instance_profile;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance_profile"
    values={[
        { label: 'delete_instance_profile', value: 'delete_instance_profile' }
    ]}
>
<TabItem value="delete_instance_profile">

Deletes the specified instance profile. All migration projects associated with the instance profile must be deleted or modified before you can delete the instance profile.

```sql
DELETE FROM aws.dms.instance_profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
