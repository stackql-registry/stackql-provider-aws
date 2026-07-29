--- 
title: app_version_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - app_version_resources
  - resiliencehub
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

Creates, updates, deletes, gets or lists an <code>app_version_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_version_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_version_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_version_resource"
    values={[
        { label: 'describe_app_version_resource', value: 'describe_app_version_resource' }
    ]}
>
<TabItem value="describe_app_version_resource">

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
    <td><CopyableCode code="app_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_version" /></td>
    <td><code>string</code></td>
    <td>Resilience Hub application version. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="physical_resource" /></td>
    <td><code>object</code></td>
    <td>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</td>
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
    <td><a href="#describe_app_version_resource"><CopyableCode code="describe_app_version_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a resource of the Resilience Hub application. This API accepts only one of the following parameters to describe the resource: resourceName logicalResourceId physicalResourceId (Along with physicalResourceId, you can also provide awsAccountId, and awsRegion)</td>
</tr>
<tr>
    <td><a href="#create_app_version_resource"><CopyableCode code="create_app_version_resource" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-appComponents"><code>appComponents</code></a>, <a href="#parameter-logicalResourceId"><code>logicalResourceId</code></a>, <a href="#parameter-physicalResourceId"><code>physicalResourceId</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a></td>
    <td></td>
    <td>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component. This action has no effect outside Resilience Hub. This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API. To update application version with new physicalResourceID, you must call ResolveAppVersionResources API.</td>
</tr>
<tr>
    <td><a href="#update_app_version_resource"><CopyableCode code="update_app_version_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a></td>
    <td></td>
    <td>Updates the resource details in the Resilience Hub application. This action has no effect outside Resilience Hub. This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API. To update application version with new physicalResourceID, you must call ResolveAppVersionResources API.</td>
</tr>
<tr>
    <td><a href="#delete_app_version_resource"><CopyableCode code="delete_app_version_resource" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource from the Resilience Hub application. You can only delete a manually added resource. To exclude non-manually added resources, use the UpdateAppVersionResource API. This action has no effect outside Resilience Hub. This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API.</td>
</tr>
<tr>
    <td><a href="#list_app_version_resources"><CopyableCode code="list_app_version_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-appVersion"><code>appVersion</code></a></td>
    <td></td>
    <td>Lists all the resources in an Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#resolve_app_version_resources"><CopyableCode code="resolve_app_version_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-appVersion"><code>appVersion</code></a></td>
    <td></td>
    <td>Resolves the resources for an application version.</td>
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
    defaultValue="describe_app_version_resource"
    values={[
        { label: 'describe_app_version_resource', value: 'describe_app_version_resource' }
    ]}
>
<TabItem value="describe_app_version_resource">

Describes a resource of the Resilience Hub application. This API accepts only one of the following parameters to describe the resource: resourceName logicalResourceId physicalResourceId (Along with physicalResourceId, you can also provide awsAccountId, and awsRegion)

```sql
SELECT
app_arn,
app_version,
physical_resource
FROM aws.resiliencehub.app_version_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_version_resource"
    values={[
        { label: 'create_app_version_resource', value: 'create_app_version_resource' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_version_resource">

Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component. This action has no effect outside Resilience Hub. This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API. To update application version with new physicalResourceID, you must call ResolveAppVersionResources API.

```sql
INSERT INTO aws.resiliencehub.app_version_resources (
additionalInfo,
appArn,
appComponents,
awsAccountId,
awsRegion,
clientToken,
logicalResourceId,
physicalResourceId,
resourceName,
resourceType,
region
)
SELECT 
'{{ additionalInfo }}',
'{{ appArn }}' /* required */,
'{{ appComponents }}' /* required */,
'{{ awsAccountId }}',
'{{ awsRegion }}',
'{{ clientToken }}',
'{{ logicalResourceId }}' /* required */,
'{{ physicalResourceId }}' /* required */,
'{{ resourceName }}',
'{{ resourceType }}' /* required */,
'{{ region }}'
RETURNING
app_arn,
app_version,
physical_resource
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_version_resources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_version_resources resource.
    - name: additionalInfo
      value: "{{ additionalInfo }}"
    - name: appArn
      value: "{{ appArn }}"
    - name: appComponents
      value:
        - "{{ appComponents }}"
    - name: awsAccountId
      value: "{{ awsAccountId }}"
    - name: awsRegion
      value: "{{ awsRegion }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: logicalResourceId
      description: |
        Defines a logical resource identifier.
      value:
        eksSourceName: "{{ eksSourceName }}"
        identifier: "{{ identifier }}"
        logicalStackName: "{{ logicalStackName }}"
        resourceGroupName: "{{ resourceGroupName }}"
        terraformSourceName: "{{ terraformSourceName }}"
    - name: physicalResourceId
      value: "{{ physicalResourceId }}"
    - name: resourceName
      value: "{{ resourceName }}"
    - name: resourceType
      value: "{{ resourceType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_version_resource"
    values={[
        { label: 'update_app_version_resource', value: 'update_app_version_resource' }
    ]}
>
<TabItem value="update_app_version_resource">

Updates the resource details in the Resilience Hub application. This action has no effect outside Resilience Hub. This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API. To update application version with new physicalResourceID, you must call ResolveAppVersionResources API.

```sql
UPDATE aws.resiliencehub.app_version_resources
SET 
additionalInfo = '{{ additionalInfo }}',
appArn = '{{ appArn }}',
appComponents = '{{ appComponents }}',
awsAccountId = '{{ awsAccountId }}',
awsRegion = '{{ awsRegion }}',
excluded = {{ excluded }},
logicalResourceId = '{{ logicalResourceId }}',
physicalResourceId = '{{ physicalResourceId }}',
resourceName = '{{ resourceName }}',
resourceType = '{{ resourceType }}'
WHERE 
region = '{{ region }}' --required
AND appArn = '{{ appArn }}' --required
RETURNING
app_arn,
app_version,
physical_resource;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_version_resource"
    values={[
        { label: 'delete_app_version_resource', value: 'delete_app_version_resource' }
    ]}
>
<TabItem value="delete_app_version_resource">

Deletes a resource from the Resilience Hub application. You can only delete a manually added resource. To exclude non-manually added resources, use the UpdateAppVersionResource API. This action has no effect outside Resilience Hub. This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API.

```sql
DELETE FROM aws.resiliencehub.app_version_resources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_app_version_resources"
    values={[
        { label: 'list_app_version_resources', value: 'list_app_version_resources' },
        { label: 'resolve_app_version_resources', value: 'resolve_app_version_resources' }
    ]}
>
<TabItem value="list_app_version_resources">

Lists all the resources in an Resilience Hub application.

```sql
EXEC aws.resiliencehub.app_version_resources.list_app_version_resources 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}", 
"appVersion": "{{ appVersion }}", 
"maxResults": {{ maxResults }}, 
"nextToken": "{{ nextToken }}", 
"resolutionId": "{{ resolutionId }}"
}'
;
```
</TabItem>
<TabItem value="resolve_app_version_resources">

Resolves the resources for an application version.

```sql
EXEC aws.resiliencehub.app_version_resources.resolve_app_version_resources 
@region='{{ region }}' --required 
@@json=
'{
"appArn": "{{ appArn }}", 
"appVersion": "{{ appVersion }}"
}'
;
```
</TabItem>
</Tabs>
