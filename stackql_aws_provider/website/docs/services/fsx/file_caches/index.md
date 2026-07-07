--- 
title: file_caches
hide_title: false
hide_table_of_contents: false
keywords:
  - file_caches
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

Creates, updates, deletes, gets or lists a <code>file_caches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_caches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.file_caches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_file_caches"
    values={[
        { label: 'describe_file_caches', value: 'describe_file_caches' }
    ]}
>
<TabItem value="describe_file_caches">

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
    <td><CopyableCode code="FileCaches" /></td>
    <td><code>array</code></td>
    <td>The response object for the DescribeFileCaches operation.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
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
    <td><a href="#describe_file_caches"><CopyableCode code="describe_file_caches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of a specific Amazon File Cache resource, if a FileCacheIds value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all cache descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This operation is used in an iterative process to retrieve a list of your cache descriptions. DescribeFileCaches is called first without a NextTokenvalue. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this operation, keep the following in mind: The implementation might return fewer than MaxResults cache descriptions while still including a NextToken value. The order of caches returned in the response of one DescribeFileCaches call and the order of caches returned across the responses of a multicall iteration is unspecified.</td>
</tr>
<tr>
    <td><a href="#create_file_cache"><CopyableCode code="create_file_cache" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileCacheType"><code>FileCacheType</code></a>, <a href="#parameter-FileCacheTypeVersion"><code>FileCacheTypeVersion</code></a>, <a href="#parameter-StorageCapacity"><code>StorageCapacity</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Creates a new Amazon File Cache resource. You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, CreateFileCache returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file cache with the specified client request token doesn't exist, CreateFileCache does the following: Creates a new, empty Amazon File Cache resource with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the cache in JSON format. The CreateFileCache call returns while the cache's lifecycle state is still CREATING. You can check the cache creation status by calling the DescribeFileCaches operation, which returns the cache state along with other information.</td>
</tr>
<tr>
    <td><a href="#update_file_cache"><CopyableCode code="update_file_cache" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileCacheId"><code>FileCacheId</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.</td>
</tr>
<tr>
    <td><a href="#delete_file_cache"><CopyableCode code="delete_file_cache" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone. The DeleteFileCache operation returns while the cache has the DELETING status. You can check the cache deletion status by calling the DescribeFileCaches operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the DescribeFileCaches operation returns a FileCacheNotFound error. The data in a deleted cache is also deleted and can't be recovered by any means.</td>
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
    defaultValue="describe_file_caches"
    values={[
        { label: 'describe_file_caches', value: 'describe_file_caches' }
    ]}
>
<TabItem value="describe_file_caches">

Returns the description of a specific Amazon File Cache resource, if a FileCacheIds value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all cache descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This operation is used in an iterative process to retrieve a list of your cache descriptions. DescribeFileCaches is called first without a NextTokenvalue. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this operation, keep the following in mind: The implementation might return fewer than MaxResults cache descriptions while still including a NextToken value. The order of caches returned in the response of one DescribeFileCaches call and the order of caches returned across the responses of a multicall iteration is unspecified.

```sql
SELECT
FileCaches,
NextToken
FROM aws.fsx.file_caches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_file_cache"
    values={[
        { label: 'create_file_cache', value: 'create_file_cache' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_file_cache">

Creates a new Amazon File Cache resource. You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, CreateFileCache returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file cache with the specified client request token doesn't exist, CreateFileCache does the following: Creates a new, empty Amazon File Cache resource with an assigned ID, and an initial lifecycle state of CREATING. Returns the description of the cache in JSON format. The CreateFileCache call returns while the cache's lifecycle state is still CREATING. You can check the cache creation status by calling the DescribeFileCaches operation, which returns the cache state along with other information.

```sql
INSERT INTO aws.fsx.file_caches (
ClientRequestToken,
FileCacheType,
FileCacheTypeVersion,
StorageCapacity,
SubnetIds,
SecurityGroupIds,
Tags,
CopyTagsToDataRepositoryAssociations,
KmsKeyId,
LustreConfiguration,
DataRepositoryAssociations,
region
)
SELECT 
'{{ ClientRequestToken }}',
'{{ FileCacheType }}' /* required */,
'{{ FileCacheTypeVersion }}' /* required */,
{{ StorageCapacity }} /* required */,
'{{ SubnetIds }}' /* required */,
'{{ SecurityGroupIds }}',
'{{ Tags }}',
{{ CopyTagsToDataRepositoryAssociations }},
'{{ KmsKeyId }}',
'{{ LustreConfiguration }}',
'{{ DataRepositoryAssociations }}',
'{{ region }}'
RETURNING
FileCache
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: file_caches
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the file_caches resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: FileCacheType
      value: "{{ FileCacheType }}"
      description: |
        The type of cache that you're creating, which must be LUSTRE.
      valid_values: ['LUSTRE']
    - name: FileCacheTypeVersion
      value: "{{ FileCacheTypeVersion }}"
      description: |
        Sets the Lustre version for the cache that you're creating, which must be 2.12.
    - name: StorageCapacity
      value: {{ StorageCapacity }}
      description: |
        The storage capacity of the cache in gibibytes (GiB). Valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the CreateFileCache operation.
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        A list of IDs specifying the security groups to apply to all network interfaces created for Amazon File Cache access. This list isn't returned in later requests to describe the cache.
    - name: Tags
      description: |
        A list of Tag values, with a maximum of 50 elements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: CopyTagsToDataRepositoryAssociations
      value: {{ CopyTagsToDataRepositoryAssociations }}
      description: |
        A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows: Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only. SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account. Amazon FSx for NetApp ONTAP Amazon FSx for OpenZFS Amazon FSx for Windows File Server If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference.
    - name: LustreConfiguration
      description: |
        The configuration for the Amazon File Cache resource being created.
      value:
        PerUnitStorageThroughput: {{ PerUnitStorageThroughput }}
        DeploymentType: "{{ DeploymentType }}"
        WeeklyMaintenanceStartTime: "{{ WeeklyMaintenanceStartTime }}"
        MetadataConfiguration:
          StorageCapacity: {{ StorageCapacity }}
    - name: DataRepositoryAssociations
      description: |
        A list of up to 8 configurations for data repository associations (DRAs) to be created during the cache creation. The DRAs link the cache to either an Amazon S3 data repository or a Network File System (NFS) data repository that supports the NFSv3 protocol. The DRA configurations must meet the following requirements: All configurations on the list must be of the same data repository type, either all S3 or all NFS. A cache can't link to different data repository types at the same time. An NFS DRA must link to an NFS file system that supports the NFSv3 protocol. DRA automatic import and automatic export is not supported.
      value:
        - FileCachePath: "{{ FileCachePath }}"
          DataRepositoryPath: "{{ DataRepositoryPath }}"
          DataRepositorySubdirectories: "{{ DataRepositorySubdirectories }}"
          NFS:
            Version: "{{ Version }}"
            DnsIps:
              - "{{ DnsIps }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_file_cache"
    values={[
        { label: 'update_file_cache', value: 'update_file_cache' }
    ]}
>
<TabItem value="update_file_cache">

Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.

```sql
UPDATE aws.fsx.file_caches
SET 
FileCacheId = '{{ FileCacheId }}',
ClientRequestToken = '{{ ClientRequestToken }}',
LustreConfiguration = '{{ LustreConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND FileCacheId = '{{ FileCacheId }}' --required
RETURNING
FileCache;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_file_cache"
    values={[
        { label: 'delete_file_cache', value: 'delete_file_cache' }
    ]}
>
<TabItem value="delete_file_cache">

Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone. The DeleteFileCache operation returns while the cache has the DELETING status. You can check the cache deletion status by calling the DescribeFileCaches operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the DescribeFileCaches operation returns a FileCacheNotFound error. The data in a deleted cache is also deleted and can't be recovered by any means.

```sql
DELETE FROM aws.fsx.file_caches
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
