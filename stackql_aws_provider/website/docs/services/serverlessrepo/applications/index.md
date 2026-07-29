--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - serverlessrepo
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.serverlessrepo.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>The name of the author publishing the app. Minimum length=1. Maximum length=127. Pattern "^&#91;a-z0-9&#93;((&#91;a-z0-9&#93;|-(?!-))*&#91;a-z0-9&#93;)?$";</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time this resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application. Minimum length=1. Maximum length=256</td>
</tr>
<tr>
    <td><CopyableCode code="home_page_url" /></td>
    <td><code>string</code></td>
    <td>A URL with more information about the application, for example the location of your GitHub repository for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="is_verified_author" /></td>
    <td><code>boolean</code></td>
    <td>Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Labels to improve discovery of apps in search results. Minimum length=1. Maximum length=127. Maximum number of labels: 10 Pattern: "^&#91;a-zA-Z0-9+\\-_:\\/@&#93;+$";</td>
</tr>
<tr>
    <td><CopyableCode code="license_url" /></td>
    <td><code>string</code></td>
    <td>A link to a license file of the app that matches the spdxLicenseID value of your application. Maximum size 5 MB</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. Minimum length=1. Maximum length=140 Pattern: "&#91;a-zA-Z0-9\\-&#93;+";</td>
</tr>
<tr>
    <td><CopyableCode code="readme_url" /></td>
    <td><code>string</code></td>
    <td>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works. Maximum size 5 MB</td>
</tr>
<tr>
    <td><CopyableCode code="spdx_license_id" /></td>
    <td><code>string</code></td>
    <td>A valid identifier from https:​//spdx.org/licenses/.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_author_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the public profile of a verified author. This URL is submitted by the author.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version information about the application.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>The name of the author publishing the app. Minimum length=1. Maximum length=127. Pattern "^&#91;a-z0-9&#93;((&#91;a-z0-9&#93;|-(?!-))*&#91;a-z0-9&#93;)?$";</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time this resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application. Minimum length=1. Maximum length=256</td>
</tr>
<tr>
    <td><CopyableCode code="home_page_url" /></td>
    <td><code>string</code></td>
    <td>A URL with more information about the application, for example the location of your GitHub repository for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Labels to improve discovery of apps in search results. Minimum length=1. Maximum length=127. Maximum number of labels: 10 Pattern: "^&#91;a-zA-Z0-9+\\-_:\\/@&#93;+$";</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. Minimum length=1. Maximum length=140 Pattern: "&#91;a-zA-Z0-9\\-&#93;+";</td>
</tr>
<tr>
    <td><CopyableCode code="spdx_license_id" /></td>
    <td><code>string</code></td>
    <td>A valid identifier from https:​//spdx.org/licenses/.</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-semanticVersion"><code>semanticVersion</code></a></td>
    <td>Gets the specified application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists applications owned by the requester.</td>
</tr>
<tr>
    <td><a href="#create_cloud_formation_change_set"><CopyableCode code="create_cloud_formation_change_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StackName"><code>StackName</code></a></td>
    <td></td>
    <td>Creates an AWS CloudFormation change set for the given application.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an application, optionally including an AWS SAM file to create the first application version in the same call.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified application.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified application.</td>
</tr>
<tr>
    <td><a href="#unshare_application"><CopyableCode code="unshare_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a></td>
    <td></td>
    <td>Unshares an application from an AWS Organization. This operation can be called only from the organization's master account.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxItems">
    <td><CopyableCode code="maxItems" /></td>
    <td><code>integer</code></td>
    <td>The total number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to specify where to start paginating.</td>
</tr>
<tr id="parameter-semanticVersion">
    <td><CopyableCode code="semanticVersion" /></td>
    <td><code>string</code></td>
    <td>The semantic version of the application to get.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Gets the specified application.

```sql
SELECT
application_id,
author,
creation_time,
description,
home_page_url,
is_verified_author,
labels,
license_url,
name,
readme_url,
spdx_license_id,
verified_author_url,
version
FROM aws.serverlessrepo.applications
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND semanticVersion = '{{ semanticVersion }}'
;
```
</TabItem>
<TabItem value="list_applications">

Lists applications owned by the requester.

```sql
SELECT
application_id,
author,
creation_time,
description,
home_page_url,
labels,
name,
spdx_license_id
FROM aws.serverlessrepo.applications
WHERE region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_formation_change_set"
    values={[
        { label: 'create_cloud_formation_change_set', value: 'create_cloud_formation_change_set' },
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_formation_change_set">

Creates an AWS CloudFormation change set for the given application.

```sql
INSERT INTO aws.serverlessrepo.applications (
Capabilities,
ChangeSetName,
ClientToken,
Description,
NotificationArns,
ParameterOverrides,
ResourceTypes,
RollbackConfiguration,
SemanticVersion,
StackName,
Tags,
TemplateId,
application_id,
region
)
SELECT 
'{{ Capabilities }}',
'{{ ChangeSetName }}',
'{{ ClientToken }}',
'{{ Description }}',
'{{ NotificationArns }}',
'{{ ParameterOverrides }}',
'{{ ResourceTypes }}',
'{{ RollbackConfiguration }}',
'{{ SemanticVersion }}',
'{{ StackName }}' /* required */,
'{{ Tags }}',
'{{ TemplateId }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
application_id,
change_set_id,
semantic_version,
stack_id
;
```
</TabItem>
<TabItem value="create_application">

Creates an application, optionally including an AWS SAM file to create the first application version in the same call.

```sql
INSERT INTO aws.serverlessrepo.applications (
Author,
Description,
HomePageUrl,
Labels,
LicenseBody,
LicenseUrl,
Name,
ReadmeBody,
ReadmeUrl,
SemanticVersion,
SourceCodeArchiveUrl,
SourceCodeUrl,
SpdxLicenseId,
TemplateBody,
TemplateUrl,
region
)
SELECT 
'{{ Author }}',
'{{ Description }}',
'{{ HomePageUrl }}',
'{{ Labels }}',
'{{ LicenseBody }}',
'{{ LicenseUrl }}',
'{{ Name }}',
'{{ ReadmeBody }}',
'{{ ReadmeUrl }}',
'{{ SemanticVersion }}',
'{{ SourceCodeArchiveUrl }}',
'{{ SourceCodeUrl }}',
'{{ SpdxLicenseId }}',
'{{ TemplateBody }}',
'{{ TemplateUrl }}',
'{{ region }}'
RETURNING
application_id,
author,
creation_time,
description,
home_page_url,
is_verified_author,
labels,
license_url,
name,
readme_url,
spdx_license_id,
verified_author_url,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the applications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: Capabilities
      value:
        - "{{ Capabilities }}"
    - name: ChangeSetName
      value: "{{ ChangeSetName }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Description
      value: "{{ Description }}"
    - name: NotificationArns
      value:
        - "{{ NotificationArns }}"
    - name: ParameterOverrides
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
    - name: ResourceTypes
      value:
        - "{{ ResourceTypes }}"
    - name: RollbackConfiguration
      description: |
        This property corresponds to the AWS CloudFormation RollbackConfiguration Data Type.
      value:
        MonitoringTimeInMinutes: {{ MonitoringTimeInMinutes }}
        RollbackTriggers:
          - Arn: "{{ Arn }}"
            Type: "{{ Type }}"
    - name: SemanticVersion
      value: "{{ SemanticVersion }}"
    - name: StackName
      value: "{{ StackName }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: TemplateId
      value: "{{ TemplateId }}"
    - name: Author
      value: "{{ Author }}"
    - name: HomePageUrl
      value: "{{ HomePageUrl }}"
    - name: Labels
      value:
        - "{{ Labels }}"
    - name: LicenseBody
      value: "{{ LicenseBody }}"
    - name: LicenseUrl
      value: "{{ LicenseUrl }}"
    - name: Name
      value: "{{ Name }}"
    - name: ReadmeBody
      value: "{{ ReadmeBody }}"
    - name: ReadmeUrl
      value: "{{ ReadmeUrl }}"
    - name: SourceCodeArchiveUrl
      value: "{{ SourceCodeArchiveUrl }}"
    - name: SourceCodeUrl
      value: "{{ SourceCodeUrl }}"
    - name: SpdxLicenseId
      value: "{{ SpdxLicenseId }}"
    - name: TemplateBody
      value: "{{ TemplateBody }}"
    - name: TemplateUrl
      value: "{{ TemplateUrl }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates the specified application.

```sql
UPDATE aws.serverlessrepo.applications
SET 
Author = '{{ Author }}',
Description = '{{ Description }}',
HomePageUrl = '{{ HomePageUrl }}',
Labels = '{{ Labels }}',
ReadmeBody = '{{ ReadmeBody }}',
ReadmeUrl = '{{ ReadmeUrl }}'
WHERE 
application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
RETURNING
application_id,
author,
creation_time,
description,
home_page_url,
is_verified_author,
labels,
license_url,
name,
readme_url,
spdx_license_id,
verified_author_url,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes the specified application.

```sql
DELETE FROM aws.serverlessrepo.applications
WHERE application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="unshare_application"
    values={[
        { label: 'unshare_application', value: 'unshare_application' }
    ]}
>
<TabItem value="unshare_application">

Unshares an application from an AWS Organization. This operation can be called only from the organization's master account.

```sql
EXEC aws.serverlessrepo.applications.unshare_application 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"OrganizationId": "{{ OrganizationId }}"
}'
;
```
</TabItem>
</Tabs>
