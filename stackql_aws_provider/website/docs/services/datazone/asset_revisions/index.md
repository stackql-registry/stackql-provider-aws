--- 
title: asset_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_revisions
  - datazone
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

Creates, updates, deletes, gets or lists an <code>asset_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.asset_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_asset_revisions"
    values={[
        { label: 'list_asset_revisions', value: 'list_asset_revisions' }
    ]}
>
<TabItem value="list_asset_revisions">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the inventory asset revision. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when an inventory asset revison was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the asset revision.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the inventory asset. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision details of the inventory asset.</td>
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
    <td><a href="#list_asset_revisions"><CopyableCode code="list_asset_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the revisions for the asset. Prerequisites: The asset must exist in the domain. There must be at least one revision of the asset (which happens automatically after creation). The domain must be valid and active. User must have permissions on the asset and domain.</td>
</tr>
<tr>
    <td><a href="#create_asset_revision"><CopyableCode code="create_asset_revision" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a revision of the asset. Asset revisions represent new versions of existing assets, capturing changes to either the underlying data or its metadata. They maintain a historical record of how assets evolve over time, who made changes, and when those changes occurred. This versioning capability is crucial for governance and compliance, allowing organizations to track changes, understand their impact, and roll back if necessary. Prerequisites: Asset must already exist in the domain with identifier. formsInput is required when asset has the form type. typeRevision should be the latest version of form type. The form content must include all required fields (e.g., bucketArn for S3ObjectCollectionForm). The owning project of the original asset must still exist and be active. User must have write access to the project and domain.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the domain where the asset is being revised.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of revisions to return in a single call to ListAssetRevisions. When the number of revisions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAssetRevisions to list the next set of revisions.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of revisions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of revisions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAssetRevisions to list the next set of revisions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_asset_revisions"
    values={[
        { label: 'list_asset_revisions', value: 'list_asset_revisions' }
    ]}
>
<TabItem value="list_asset_revisions">

Lists the revisions for the asset. Prerequisites: The asset must exist in the domain. There must be at least one revision of the asset (which happens automatically after creation). The domain must be valid and active. User must have permissions on the asset and domain.

```sql
SELECT
id,
createdAt,
createdBy,
domainId,
revision
FROM aws.datazone.asset_revisions
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_asset_revision"
    values={[
        { label: 'create_asset_revision', value: 'create_asset_revision' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset_revision">

Creates a revision of the asset. Asset revisions represent new versions of existing assets, capturing changes to either the underlying data or its metadata. They maintain a historical record of how assets evolve over time, who made changes, and when those changes occurred. This versioning capability is crucial for governance and compliance, allowing organizations to track changes, understand their impact, and roll back if necessary. Prerequisites: Asset must already exist in the domain with identifier. formsInput is required when asset has the form type. typeRevision should be the latest version of form type. The form content must include all required fields (e.g., bucketArn for S3ObjectCollectionForm). The owning project of the original asset must still exist and be active. User must have write access to the project and domain.

```sql
INSERT INTO aws.datazone.asset_revisions (
name,
typeRevision,
description,
glossaryTerms,
formsInput,
predictionConfiguration,
clientToken,
domain_identifier,
identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ typeRevision }}',
'{{ description }}',
'{{ glossaryTerms }}',
'{{ formsInput }}',
'{{ predictionConfiguration }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ identifier }}',
'{{ region }}'
RETURNING
id,
name,
createdAt,
createdBy,
description,
domainId,
externalIdentifier,
firstRevisionCreatedAt,
firstRevisionCreatedBy,
formsOutput,
glossaryTerms,
governedGlossaryTerms,
latestTimeSeriesDataPointFormsOutput,
listing,
owningProjectId,
predictionConfiguration,
readOnlyFormsOutput,
revision,
typeIdentifier,
typeRevision
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: asset_revisions
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the asset_revisions resource.
    - name: identifier
      value: "{{ identifier }}"
      description: Required parameter for the asset_revisions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the asset_revisions resource.
    - name: name
      value: "{{ name }}"
    - name: typeRevision
      value: "{{ typeRevision }}"
    - name: description
      value: "{{ description }}"
    - name: glossaryTerms
      value:
        - "{{ glossaryTerms }}"
    - name: formsInput
      value:
        - formName: "{{ formName }}"
          typeIdentifier: "{{ typeIdentifier }}"
          typeRevision: "{{ typeRevision }}"
          content: "{{ content }}"
    - name: predictionConfiguration
      description: |
        The configuration of the prediction.
      value:
        businessNameGeneration:
          enabled: {{ enabled }}
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
