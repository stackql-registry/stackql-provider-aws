--- 
title: configured_model_algorithm_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_model_algorithm_associations
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>configured_model_algorithm_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configured_model_algorithm_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.configured_model_algorithm_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configured_model_algorithm_association"
    values={[
        { label: 'get_configured_model_algorithm_association', value: 'get_configured_model_algorithm_association' },
        { label: 'list_configured_model_algorithm_associations', value: 'list_configured_model_algorithm_associations' }
    ]}
>
<TabItem value="get_configured_model_algorithm_association">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured model algorithm association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm that was associated to the collaboration. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-model-algorithm/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured model algorithm association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured model algorithm association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that created the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="privacyConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about the privacy configuration for a configured model algorithm association.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured model algorithm association was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configured_model_algorithm_associations">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured model algorithm association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm that is being associated. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-model-algorithm/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured model algorithm association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured model algorithm association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that created the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured model algorithm association was updated.</td>
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
    <td><a href="#get_configured_model_algorithm_association"><CopyableCode code="get_configured_model_algorithm_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configured_model_algorithm_association_arn"><code>configured_model_algorithm_association_arn</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a configured model algorithm association.</td>
</tr>
<tr>
    <td><a href="#list_configured_model_algorithm_associations"><CopyableCode code="list_configured_model_algorithm_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of configured model algorithm associations.</td>
</tr>
<tr>
    <td><a href="#create_configured_model_algorithm_association"><CopyableCode code="create_configured_model_algorithm_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuredModelAlgorithmArn"><code>configuredModelAlgorithmArn</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Associates a configured model algorithm to a collaboration for use by any member of the collaboration.</td>
</tr>
<tr>
    <td><a href="#delete_configured_model_algorithm_association"><CopyableCode code="delete_configured_model_algorithm_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configured_model_algorithm_association_arn"><code>configured_model_algorithm_association_arn</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configured model algorithm association.</td>
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
<tr id="parameter-configured_model_algorithm_association_arn">
    <td><CopyableCode code="configured_model_algorithm_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that you want to delete.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that is deleting the configured model algorithm association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configured_model_algorithm_association"
    values={[
        { label: 'get_configured_model_algorithm_association', value: 'get_configured_model_algorithm_association' },
        { label: 'list_configured_model_algorithm_associations', value: 'list_configured_model_algorithm_associations' }
    ]}
>
<TabItem value="get_configured_model_algorithm_association">

Returns information about a configured model algorithm association.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmArn,
configuredModelAlgorithmAssociationArn,
createTime,
description,
membershipIdentifier,
privacyConfiguration,
tags,
updateTime
FROM aws.cleanroomsml.configured_model_algorithm_associations
WHERE configured_model_algorithm_association_arn = '{{ configured_model_algorithm_association_arn }}' -- required
AND membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configured_model_algorithm_associations">

Returns a list of configured model algorithm associations.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmArn,
configuredModelAlgorithmAssociationArn,
createTime,
description,
membershipIdentifier,
updateTime
FROM aws.cleanroomsml.configured_model_algorithm_associations
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configured_model_algorithm_association"
    values={[
        { label: 'create_configured_model_algorithm_association', value: 'create_configured_model_algorithm_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configured_model_algorithm_association">

Associates a configured model algorithm to a collaboration for use by any member of the collaboration.

```sql
INSERT INTO aws.cleanroomsml.configured_model_algorithm_associations (
configuredModelAlgorithmArn,
name,
description,
privacyConfiguration,
tags,
membership_identifier,
region
)
SELECT 
'{{ configuredModelAlgorithmArn }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ privacyConfiguration }}',
'{{ tags }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
configuredModelAlgorithmAssociationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configured_model_algorithm_associations
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the configured_model_algorithm_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configured_model_algorithm_associations resource.
    - name: configuredModelAlgorithmArn
      value: "{{ configuredModelAlgorithmArn }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: privacyConfiguration
      description: |
        Information about the privacy configuration for a configured model algorithm association.
      value:
        policies:
          trainedModels:
            containerLogs:
              - allowedAccountIds: "{{ allowedAccountIds }}"
                filterPattern: "{{ filterPattern }}"
                logType: "{{ logType }}"
                logRedactionConfiguration:
                  entitiesToRedact: "{{ entitiesToRedact }}"
                  customEntityConfig: "{{ customEntityConfig }}"
            containerMetrics:
              noiseLevel: "{{ noiseLevel }}"
            maxArtifactSize:
              unit: "{{ unit }}"
              value: {{ value }}
          trainedModelExports:
            maxSize:
              unit: "{{ unit }}"
              value: {{ value }}
            filesToExport:
              - "{{ filesToExport }}"
          trainedModelInferenceJobs:
            containerLogs:
              - allowedAccountIds: "{{ allowedAccountIds }}"
                filterPattern: "{{ filterPattern }}"
                logType: "{{ logType }}"
                logRedactionConfiguration:
                  entitiesToRedact: "{{ entitiesToRedact }}"
                  customEntityConfig: "{{ customEntityConfig }}"
            maxOutputSize:
              unit: "{{ unit }}"
              value: {{ value }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configured_model_algorithm_association"
    values={[
        { label: 'delete_configured_model_algorithm_association', value: 'delete_configured_model_algorithm_association' }
    ]}
>
<TabItem value="delete_configured_model_algorithm_association">

Deletes a configured model algorithm association.

```sql
DELETE FROM aws.cleanroomsml.configured_model_algorithm_associations
WHERE configured_model_algorithm_association_arn = '{{ configured_model_algorithm_association_arn }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
