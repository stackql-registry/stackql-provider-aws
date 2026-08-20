--- 
title: data_transformation_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - data_transformation_profiles
  - healthlake
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

Creates, updates, deletes, gets or lists a <code>data_transformation_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_transformation_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.healthlake.data_transformation_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_transformation_profile"
    values={[
        { label: 'get_data_transformation_profile', value: 'get_data_transformation_profile' },
        { label: 'list_data_transformation_profiles', value: 'list_data_transformation_profiles' }
    ]}
>
<TabItem value="get_data_transformation_profile">

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
    <td><CopyableCode code="change_description" /></td>
    <td><code>string</code></td>
    <td>A description of what changed in this version.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_description" /></td>
    <td><code>string</code></td>
    <td>The description of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the profile. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_mapping" /></td>
    <td><code>object</code></td>
    <td>The profile content as a map of file paths to content strings.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="source_format" /></td>
    <td><code>string</code></td>
    <td>The source data format of the profile. (CCDA, CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="target_format" /></td>
    <td><code>string</code></td>
    <td>The target output format of the profile. (FHIR_R4)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the retrieved profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_transformation_profiles">

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
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the profile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_description" /></td>
    <td><code>string</code></td>
    <td>A description of the profile's purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the profile. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="source_format" /></td>
    <td><code>string</code></td>
    <td>The source data format that this profile converts from. (CCDA, CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="target_format" /></td>
    <td><code>string</code></td>
    <td>The target output format of the profile. (FHIR_R4)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The latest version number of the profile.</td>
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
    <td><a href="#get_data_transformation_profile"><CopyableCode code="get_data_transformation_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a data transformation profile's metadata and profile content at a specific version. Specify version 0 to retrieve the DRAFT, a version number between 1 and 99 to retrieve a specific published version, or omit the version to retrieve the latest published version.</td>
</tr>
<tr>
    <td><a href="#list_data_transformation_profiles"><CopyableCode code="list_data_transformation_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all data transformation profiles in your account, returning the latest version summary for each. Use GetDataTransformationProfile to retrieve profile content. Results are paginated. Use the NextToken parameter to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#create_data_transformation_profile"><CopyableCode code="create_data_transformation_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceFormat"><code>SourceFormat</code></a>, <a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-ProfileName"><code>ProfileName</code></a></td>
    <td></td>
    <td>Creates a data transformation profile in DRAFT state. Specify a built-in starter profile, an existing profile version, raw profile content, or a sample data file as the source.</td>
</tr>
<tr>
    <td><a href="#update_data_transformation_profile"><CopyableCode code="update_data_transformation_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileId"><code>ProfileId</code></a>, <a href="#parameter-ProfileMapping"><code>ProfileMapping</code></a></td>
    <td></td>
    <td>Updates the DRAFT version (version 0) of a data transformation profile with new profile content. The update replaces all existing DRAFT content.</td>
</tr>
<tr>
    <td><a href="#delete_data_transformation_profile"><CopyableCode code="delete_data_transformation_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data transformation profile and all its versions, including the DRAFT and all published versions.</td>
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
    defaultValue="get_data_transformation_profile"
    values={[
        { label: 'get_data_transformation_profile', value: 'get_data_transformation_profile' },
        { label: 'list_data_transformation_profiles', value: 'list_data_transformation_profiles' }
    ]}
>
<TabItem value="get_data_transformation_profile">

Retrieves a data transformation profile's metadata and profile content at a specific version. Specify version 0 to retrieve the DRAFT, a version number between 1 and 99 to retrieve a specific published version, or omit the version to retrieve the latest published version.

```sql
SELECT
change_description,
last_updated_at,
profile_description,
profile_id,
profile_mapping,
profile_name,
source_format,
target_format,
version
FROM aws.healthlake.data_transformation_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_transformation_profiles">

Lists all data transformation profiles in your account, returning the latest version summary for each. Use GetDataTransformationProfile to retrieve profile content. Results are paginated. Use the NextToken parameter to retrieve additional results.

```sql
SELECT
last_updated_at,
profile_description,
profile_id,
profile_name,
source_format,
target_format,
version
FROM aws.healthlake.data_transformation_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_transformation_profile"
    values={[
        { label: 'create_data_transformation_profile', value: 'create_data_transformation_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_transformation_profile">

Creates a data transformation profile in DRAFT state. Specify a built-in starter profile, an existing profile version, raw profile content, or a sample data file as the source.

```sql
INSERT INTO aws.healthlake.data_transformation_profiles (
SourceFormat,
Source,
KmsKeyId,
ProfileDescription,
ProfileName,
Tags,
ClientToken,
region
)
SELECT 
'{{ SourceFormat }}' /* required */,
'{{ Source }}' /* required */,
'{{ KmsKeyId }}',
'{{ ProfileDescription }}',
'{{ ProfileName }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
last_updated_at,
profile_id,
profile_name,
source_format,
target_format,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_transformation_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_transformation_profiles resource.
    - name: SourceFormat
      value: "{{ SourceFormat }}"
      description: |
        The source data format that this profile converts from (Consolidated Clinical Document Architecture (C-CDA) or Comma-separated values (CSV)).
      valid_values: ['CCDA', 'CSV']
    - name: Source
      description: |
        The source for the initial profile content. Specify a built-in starter profile, an existing profile version to clone, raw profile content for CI/CD workflows, or a sample data file in Amazon S3.
      value:
        StarterProfile:
          StarterProfileName: "{{ StarterProfileName }}"
        ExistingVersionedProfileId:
          ProfileId: "{{ ProfileId }}"
          Version: {{ Version }}
        ProfileMapping:
          ProfileMapping: "{{ ProfileMapping }}"
        SampleData:
          S3Uri: "{{ S3Uri }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The AWS Key Management Service (AWS KMS) key identifier used to encrypt the profile content at rest.
    - name: ProfileDescription
      value: "{{ ProfileDescription }}"
      description: |
        A human-readable description of the profile's purpose.
    - name: ProfileName
      value: "{{ ProfileName }}"
      description: |
        A name for the data transformation profile.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to associate with the profile at creation time.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_transformation_profile"
    values={[
        { label: 'update_data_transformation_profile', value: 'update_data_transformation_profile' }
    ]}
>
<TabItem value="update_data_transformation_profile">

Updates the DRAFT version (version 0) of a data transformation profile with new profile content. The update replaces all existing DRAFT content.

```sql
UPDATE aws.healthlake.data_transformation_profiles
SET 
ProfileId = '{{ ProfileId }}',
ProfileMapping = '{{ ProfileMapping }}',
ChangeDescription = '{{ ChangeDescription }}'
WHERE 
region = '{{ region }}' --required
AND ProfileId = '{{ ProfileId }}' --required
AND ProfileMapping = '{{ ProfileMapping }}' --required
RETURNING
last_updated_at,
profile_id,
profile_name,
source_format,
target_format;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_transformation_profile"
    values={[
        { label: 'delete_data_transformation_profile', value: 'delete_data_transformation_profile' }
    ]}
>
<TabItem value="delete_data_transformation_profile">

Deletes a data transformation profile and all its versions, including the DRAFT and all published versions.

```sql
DELETE FROM aws.healthlake.data_transformation_profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
