--- 
title: data_repository_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_repository_associations
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

Creates, updates, deletes, gets or lists a <code>data_repository_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_repository_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.data_repository_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_repository_associations"
    values={[
        { label: 'describe_data_repository_associations', value: 'describe_data_repository_associations' }
    ]}
>
<TabItem value="describe_data_repository_associations">

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
    <td><CopyableCode code="Associations" /></td>
    <td><code>array</code></td>
    <td>An array of one or more data repository association descriptions.</td>
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
    <td><a href="#describe_data_repository_associations"><CopyableCode code="describe_data_repository_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more AssociationIds values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all FSx for Lustre 2.12 and 2,15 file systems, excluding scratch_1 deployment type. You can use filters to narrow the response to include just data repository associations for specific file systems (use the file-system-id filter with the ID of the file system) or caches (use the file-cache-id filter with the ID of the cache), or data repository associations for a specific repository type (use the data-repository-type filter with a value of S3 or NFS). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all data repository associations, you can paginate the response by using the optional MaxResults parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a NextToken value is returned in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.</td>
</tr>
<tr>
    <td><a href="#create_data_repository_association"><CopyableCode code="create_data_repository_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a>, <a href="#parameter-DataRepositoryPath"><code>DataRepositoryPath</code></a></td>
    <td></td>
    <td>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type. Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket. CreateDataRepositoryAssociation isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the CreateFileCache operation.</td>
</tr>
<tr>
    <td><a href="#update_data_repository_association"><CopyableCode code="update_data_repository_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssociationId"><code>AssociationId</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type.</td>
</tr>
<tr>
    <td><a href="#delete_data_repository_association"><CopyableCode code="delete_data_repository_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type.</td>
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
    defaultValue="describe_data_repository_associations"
    values={[
        { label: 'describe_data_repository_associations', value: 'describe_data_repository_associations' }
    ]}
>
<TabItem value="describe_data_repository_associations">

Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more AssociationIds values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all FSx for Lustre 2.12 and 2,15 file systems, excluding scratch_1 deployment type. You can use filters to narrow the response to include just data repository associations for specific file systems (use the file-system-id filter with the ID of the file system) or caches (use the file-cache-id filter with the ID of the cache), or data repository associations for a specific repository type (use the data-repository-type filter with a value of S3 or NFS). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all data repository associations, you can paginate the response by using the optional MaxResults parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a NextToken value is returned in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.

```sql
SELECT
Associations,
NextToken
FROM aws.fsx.data_repository_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_repository_association"
    values={[
        { label: 'create_data_repository_association', value: 'create_data_repository_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_repository_association">

Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type. Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket. CreateDataRepositoryAssociation isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the CreateFileCache operation.

```sql
INSERT INTO aws.fsx.data_repository_associations (
FileSystemId,
FileSystemPath,
DataRepositoryPath,
BatchImportMetaDataOnCreate,
ImportedFileChunkSize,
S3,
ClientRequestToken,
Tags,
region
)
SELECT 
'{{ FileSystemId }}' /* required */,
'{{ FileSystemPath }}',
'{{ DataRepositoryPath }}' /* required */,
{{ BatchImportMetaDataOnCreate }},
{{ ImportedFileChunkSize }},
'{{ S3 }}',
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Association
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_repository_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_repository_associations resource.
    - name: FileSystemId
      value: "{{ FileSystemId }}"
      description: |
        The globally unique ID of the file system, assigned by Amazon FSx.
    - name: FileSystemPath
      value: "{{ FileSystemPath }}"
      description: |
        A path on the file system that points to a high-level directory (such as /ns1/) or subdirectory (such as /ns1/subdir/) that will be mapped 1-1 with DataRepositoryPath. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path /ns1/, then you cannot link another data repository with file system path /ns1/ns2. This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory. If you specify only a forward slash (/) as the file system path, you can link only one data repository to the file system. You can only specify "/" as the file system path for the first data repository associated with a file system.
    - name: DataRepositoryPath
      value: "{{ DataRepositoryPath }}"
      description: |
        The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format s3://bucket-name/prefix/ (where prefix is optional). This path specifies where in the S3 data repository files will be imported from or exported to.
    - name: BatchImportMetaDataOnCreate
      value: {{ BatchImportMetaDataOnCreate }}
      description: |
        Set to true to run an import data repository task to import metadata from the data repository to the file system after the data repository association is created. Default is false.
    - name: ImportedFileChunkSize
      value: {{ ImportedFileChunkSize }}
      description: |
        For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
    - name: S3
      description: |
        The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
      value:
        AutoImportPolicy:
          Events:
            - "{{ Events }}"
        AutoExportPolicy:
          Events:
            - "{{ Events }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: Tags
      description: |
        A list of Tag values, with a maximum of 50 elements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_repository_association"
    values={[
        { label: 'update_data_repository_association', value: 'update_data_repository_association' }
    ]}
>
<TabItem value="update_data_repository_association">

Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type.

```sql
UPDATE aws.fsx.data_repository_associations
SET 
AssociationId = '{{ AssociationId }}',
ClientRequestToken = '{{ ClientRequestToken }}',
ImportedFileChunkSize = {{ ImportedFileChunkSize }},
S3 = '{{ S3 }}'
WHERE 
region = '{{ region }}' --required
AND AssociationId = '{{ AssociationId }}' --required
RETURNING
Association;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_repository_association"
    values={[
        { label: 'delete_data_repository_association', value: 'delete_data_repository_association' }
    ]}
>
<TabItem value="delete_data_repository_association">

Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type.

```sql
DELETE FROM aws.fsx.data_repository_associations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
