--- 
title: filters
hide_title: false
hide_table_of_contents: false
keywords:
  - filters
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_filters"
    values={[
        { label: 'list_filters', value: 'list_filters' }
    ]}
>
<TabItem value="list_filters">

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
    <td>The name of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action that is to be applied to the findings that match the filter. (NONE, SUPPRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) associated with this filter.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time this filter was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="criteria" /></td>
    <td><code>object</code></td>
    <td>Details on the criteria used to define the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the account that created the filter. (pattern: &lt;code&gt;.*(^\d&#123;12&#125;$)|(^o-&#91;a-z0-9&#93;&#123;10,32&#125;$).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags attached to the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the filter was last updated at.</td>
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
    <td><a href="#list_filters"><CopyableCode code="list_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the filters associated with your account.</td>
</tr>
<tr>
    <td><a href="#create_filter"><CopyableCode code="create_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-filterCriteria"><code>filterCriteria</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a filter resource using specified filter criteria. When the filter action is set to SUPPRESS this action creates a suppression rule.</td>
</tr>
<tr>
    <td><a href="#update_filter"><CopyableCode code="update_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-filterArn"><code>filterArn</code></a></td>
    <td></td>
    <td>Specifies the action that is to be applied to the findings that match the filter.</td>
</tr>
<tr>
    <td><a href="#delete_filter"><CopyableCode code="delete_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a filter resource.</td>
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
    defaultValue="list_filters"
    values={[
        { label: 'list_filters', value: 'list_filters' }
    ]}
>
<TabItem value="list_filters">

Lists the filters associated with your account.

```sql
SELECT
name,
action,
arn,
created_at,
criteria,
description,
owner_id,
reason,
tags,
updated_at
FROM aws.inspector2.filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_filter"
    values={[
        { label: 'create_filter', value: 'create_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_filter">

Creates a filter resource using specified filter criteria. When the filter action is set to SUPPRESS this action creates a suppression rule.

```sql
INSERT INTO aws.inspector2.filters (
action,
description,
filterCriteria,
name,
tags,
reason,
region
)
SELECT 
'{{ action }}' /* required */,
'{{ description }}',
'{{ filterCriteria }}' /* required */,
'{{ name }}' /* required */,
'{{ tags }}',
'{{ reason }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: filters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the filters resource.
    - name: action
      value: "{{ action }}"
      valid_values: ['NONE', 'SUPPRESS']
    - name: description
      value: "{{ description }}"
    - name: filterCriteria
      description: |
        Details on the criteria used to define the filter.
      value:
        findingArn:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        awsAccountId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        findingType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        severity:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        firstObservedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        lastObservedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        updatedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        findingStatus:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        title_:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        inspectorScore:
          - upperInclusive: {{ upperInclusive }}
            lowerInclusive: {{ lowerInclusive }}
        resourceType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        resourceId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        resourceTags:
          - comparison: "{{ comparison }}"
            key: "{{ key }}"
            value: "{{ value }}"
        ec2InstanceImageId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ec2InstanceVpcId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ec2InstanceSubnetId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImagePushedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        ecrImageArchitecture:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageRegistry:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageRepositoryName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageTags:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageHash:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageLastInUseAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        ecrImageInUseCount:
          - upperInclusive: {{ upperInclusive }}
            lowerInclusive: {{ lowerInclusive }}
        portRange:
          - beginInclusive: {{ beginInclusive }}
            endInclusive: {{ endInclusive }}
        networkProtocol:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        componentId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        componentType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        vulnerabilityId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        vulnerabilitySource:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        vendorSeverity:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        vulnerablePackages:
          - name:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            version:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            epoch:
              upperInclusive: {{ upperInclusive }}
              lowerInclusive: {{ lowerInclusive }}
            release:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            architecture:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            sourceLayerHash:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            sourceLambdaLayerArn:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            filePath:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
        relatedVulnerabilities:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        fixAvailable:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionLayers:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionRuntime:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionLastModifiedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        lambdaFunctionExecutionRoleArn:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        exploitAvailable:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        codeVulnerabilityDetectorName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        codeVulnerabilityDetectorTags:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        codeVulnerabilityFilePath:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        epssScore:
          - upperInclusive: {{ upperInclusive }}
            lowerInclusive: {{ lowerInclusive }}
        codeRepositoryProjectName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        codeRepositoryProviderType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudProvider:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudProviderRegion:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudProviderAccountId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudProviderOrgId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudVmImageReference:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudVmNetworkId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudVmSubnetIds:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudImageRepositoryName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudImageRegistry:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudImageDigest:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudImageTags:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudImagePushedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        cloudImageArchitecture:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudImageLastInUseAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        cloudImageInUseCount:
          - upperInclusive: {{ upperInclusive }}
            lowerInclusive: {{ lowerInclusive }}
        cloudServerlessFunctionName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudServerlessFunctionRuntime:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        cloudServerlessFunctionLastModifiedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        cloudServerlessFunctionExecutionRole:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
    - name: name
      value: "{{ name }}"
    - name: tags
      value: "{{ tags }}"
    - name: reason
      value: "{{ reason }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_filter"
    values={[
        { label: 'update_filter', value: 'update_filter' }
    ]}
>
<TabItem value="update_filter">

Specifies the action that is to be applied to the findings that match the filter.

```sql
UPDATE aws.inspector2.filters
SET 
action = '{{ action }}',
description = '{{ description }}',
filterCriteria = '{{ filterCriteria }}',
name = '{{ name }}',
filterArn = '{{ filterArn }}',
reason = '{{ reason }}'
WHERE 
region = '{{ region }}' --required
AND filterArn = '{{ filterArn }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_filter"
    values={[
        { label: 'delete_filter', value: 'delete_filter' }
    ]}
>
<TabItem value="delete_filter">

Deletes a filter resource.

```sql
DELETE FROM aws.inspector2.filters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
