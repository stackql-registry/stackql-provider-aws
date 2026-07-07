--- 
title: microsoft_ads
hide_title: false
hide_table_of_contents: false
keywords:
  - microsoft_ads
  - ds
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

Creates, updates, deletes, gets or lists a <code>microsoft_ads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microsoft_ads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.microsoft_ads" /></td></tr>
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
    <td><a href="#create_microsoft_ad"><CopyableCode code="create_microsoft_ad" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Password"><code>Password</code></a>, <a href="#parameter-VpcSettings"><code>VpcSettings</code></a></td>
    <td></td>
    <td>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see Managed Microsoft AD in the Directory Service Admin Guide. Before you call CreateMicrosoftAD, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateMicrosoftAD operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.</td>
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
    defaultValue="create_microsoft_ad"
    values={[
        { label: 'create_microsoft_ad', value: 'create_microsoft_ad' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_microsoft_ad">

Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see Managed Microsoft AD in the Directory Service Admin Guide. Before you call CreateMicrosoftAD, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateMicrosoftAD operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.

```sql
INSERT INTO aws.ds.microsoft_ads (
Name,
ShortName,
Password,
Description,
VpcSettings,
Edition,
Tags,
NetworkType,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ ShortName }}',
'{{ Password }}' /* required */,
'{{ Description }}',
'{{ VpcSettings }}' /* required */,
'{{ Edition }}',
'{{ Tags }}',
'{{ NetworkType }}',
'{{ region }}'
RETURNING
DirectoryId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: microsoft_ads
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the microsoft_ads resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The fully qualified domain name for the Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.
    - name: ShortName
      value: "{{ ShortName }}"
      description: |
        The NetBIOS name for your domain, such as CORP. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com.
    - name: Password
      value: "{{ Password }}"
      description: |
        The password for the default administrative user named Admin. If you need to change the password for the administrator account, you can use the ResetUserPassword API call.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the directory. This label will appear on the Amazon Web Services console Directory Details page after the directory is created.
    - name: VpcSettings
      description: |
        Contains VPC information for the CreateDirectory, CreateMicrosoftAD, or CreateHybridAD operation.
      value:
        VpcId: "{{ VpcId }}"
        SubnetIds:
          - "{{ SubnetIds }}"
    - name: Edition
      value: "{{ Edition }}"
      description: |
        Managed Microsoft AD is available in two editions: Standard and Enterprise. Enterprise is the default.
      valid_values: ['Enterprise', 'Standard', 'Hybrid']
    - name: Tags
      description: |
        The tags to be assigned to the Managed Microsoft AD directory.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        The network type for your domain. The default value is IPv4 or IPv6 based on the provided subnet capabilities.
      valid_values: ['Dual-stack', 'IPv4', 'IPv6']
`}</CodeBlock>

</TabItem>
</Tabs>
