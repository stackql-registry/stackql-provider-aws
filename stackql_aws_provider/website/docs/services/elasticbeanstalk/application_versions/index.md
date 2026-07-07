--- 
title: application_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - application_versions
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>application_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.application_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_versions"
    values={[
        { label: 'describe_application_versions', value: 'describe_application_versions' }
    ]}
>
<TabItem value="describe_application_versions">

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
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application to which the application version belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application version.</td>
</tr>
<tr>
    <td><CopyableCode code="BuildArn" /></td>
    <td><code>string</code></td>
    <td>Reference to the artifact from the AWS CodeBuild build.</td>
</tr>
<tr>
    <td><CopyableCode code="DateCreated" /></td>
    <td><code>string</code></td>
    <td>The creation date of the application version.</td>
</tr>
<tr>
    <td><CopyableCode code="DateUpdated" /></td>
    <td><code>string</code></td>
    <td>The last modified date of the application version.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the application version.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceBuildInformation" /></td>
    <td><code>string</code></td>
    <td>If the version's source code was retrieved from AWS CodeCommit, the location of the source code for the application version.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceBundle" /></td>
    <td><code>string</code></td>
    <td>The storage location of the application version's source bundle in Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The processing status of the application version. Reflects the state of the application version during its creation. Many of the values are only applicable if you specified True for the Process parameter of the CreateApplicationVersion action. The following list describes the possible values. Unprocessed – Application version wasn't pre-processed or validated. Elastic Beanstalk will validate configuration files during deployment of the application version to an environment. Processing – Elastic Beanstalk is currently processing the application version. Building – Application version is currently undergoing an AWS CodeBuild build. Processed – Elastic Beanstalk was successfully pre-processed and validated. Failed – Either the AWS CodeBuild build failed or configuration files didn't pass validation. This application version isn't usable.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionLabel" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the application version.</td>
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
    <td><a href="#describe_application_versions"><CopyableCode code="describe_application_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-VersionLabels"><code>VersionLabels</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieve a list of application versions.</td>
</tr>
<tr>
    <td><a href="#create_application_version"><CopyableCode code="create_application_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-VersionLabel"><code>VersionLabel</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-SourceBuildInformation"><code>SourceBuildInformation</code></a>, <a href="#parameter-SourceBundle"><code>SourceBundle</code></a>, <a href="#parameter-BuildConfiguration"><code>BuildConfiguration</code></a>, <a href="#parameter-AutoCreateApplication"><code>AutoCreateApplication</code></a>, <a href="#parameter-Process"><code>Process</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows: Specify a commit in an AWS CodeCommit repository with SourceBuildInformation. Specify a build in an AWS CodeBuild with SourceBuildInformation and BuildConfiguration. Specify a source bundle in S3 with SourceBundle Omit both SourceBuildInformation and SourceBundle to use the default sample application. After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</td>
</tr>
<tr>
    <td><a href="#update_application_version"><CopyableCode code="update_application_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-VersionLabel"><code>VersionLabel</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a></td>
    <td>Updates the specified application version to have the specified properties. If a property (for example, description) is not provided, the value remains unchanged. To clear properties, specify an empty string.</td>
</tr>
<tr>
    <td><a href="#delete_application_version"><CopyableCode code="delete_application_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-VersionLabel"><code>VersionLabel</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DeleteSourceBundle"><code>DeleteSourceBundle</code></a></td>
    <td>Deletes the specified version from the specified application. You cannot delete an application version that is associated with a running environment.</td>
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
<tr id="parameter-ApplicationName">
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application to which the version belongs.</td>
</tr>
<tr id="parameter-VersionLabel">
    <td><CopyableCode code="VersionLabel" /></td>
    <td><code>string</code></td>
    <td>The label of the version to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplicationName">
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>Specify an application name to show only application versions for that application.</td>
</tr>
<tr id="parameter-AutoCreateApplication">
    <td><CopyableCode code="AutoCreateApplication" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to create an application with the specified name if it doesn't already exist.</td>
</tr>
<tr id="parameter-BuildConfiguration">
    <td><CopyableCode code="BuildConfiguration" /></td>
    <td><code>object</code></td>
    <td>Settings for an AWS CodeBuild build.</td>
</tr>
<tr id="parameter-DeleteSourceBundle">
    <td><CopyableCode code="DeleteSourceBundle" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A new description for this version.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>For a paginated request. Specify a maximum number of application versions to include in each response. If no MaxRecords is specified, all available application versions are retrieved in a single response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved.</td>
</tr>
<tr id="parameter-Process">
    <td><CopyableCode code="Process" /></td>
    <td><code>boolean</code></td>
    <td>Pre-processes and validates the environment manifest (env.yaml) and configuration files (*.config files in the .ebextensions folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment. You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional. The Process option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration.</td>
</tr>
<tr id="parameter-SourceBuildInformation">
    <td><CopyableCode code="SourceBuildInformation" /></td>
    <td><code>object</code></td>
    <td>Specify a commit in an AWS CodeCommit Git repository to use as the source code for the application version.</td>
</tr>
<tr id="parameter-SourceBundle">
    <td><CopyableCode code="SourceBundle" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 bucket and key that identify the location of the source bundle for this version. The Amazon S3 bucket must be in the same region as the environment. Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with SourceBuildInformation), but not both. If neither SourceBundle nor SourceBuildInformation are provided, Elastic Beanstalk uses a sample application.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Specifies the tags applied to the application version. Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags.</td>
</tr>
<tr id="parameter-VersionLabels">
    <td><CopyableCode code="VersionLabels" /></td>
    <td><code>array</code></td>
    <td>Specify a version label to show a specific application version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_application_versions"
    values={[
        { label: 'describe_application_versions', value: 'describe_application_versions' }
    ]}
>
<TabItem value="describe_application_versions">

Retrieve a list of application versions.

```sql
SELECT
ApplicationName,
ApplicationVersionArn,
BuildArn,
DateCreated,
DateUpdated,
Description,
SourceBuildInformation,
SourceBundle,
Status,
VersionLabel
FROM aws.elasticbeanstalk.application_versions
WHERE region = '{{ region }}' -- required
AND ApplicationName = '{{ ApplicationName }}'
AND VersionLabels = '{{ VersionLabels }}'
AND MaxRecords = '{{ MaxRecords }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_version"
    values={[
        { label: 'create_application_version', value: 'create_application_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_version">

Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows: Specify a commit in an AWS CodeCommit repository with SourceBuildInformation. Specify a build in an AWS CodeBuild with SourceBuildInformation and BuildConfiguration. Specify a source bundle in S3 with SourceBundle Omit both SourceBuildInformation and SourceBundle to use the default sample application. After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.

```sql
INSERT INTO aws.elasticbeanstalk.application_versions (
ApplicationName,
VersionLabel,
region,
Description,
SourceBuildInformation,
SourceBundle,
BuildConfiguration,
AutoCreateApplication,
Process,
Tags
)
SELECT 
'{{ ApplicationName }}',
'{{ VersionLabel }}',
'{{ region }}',
'{{ Description }}',
'{{ SourceBuildInformation }}',
'{{ SourceBundle }}',
'{{ BuildConfiguration }}',
'{{ AutoCreateApplication }}',
'{{ Process }}',
'{{ Tags }}'
RETURNING
ApplicationName,
ApplicationVersionArn,
BuildArn,
DateCreated,
DateUpdated,
Description,
SourceBuildInformation,
SourceBundle,
Status,
VersionLabel
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: application_versions
  props:
    - name: ApplicationName
      value: "{{ ApplicationName }}"
      description: Required parameter for the application_versions resource.
    - name: VersionLabel
      value: "{{ VersionLabel }}"
      description: Required parameter for the application_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the application_versions resource.
    - name: Description
      value: "{{ Description }}"
      description: A description of this application version.
      description: A description of this application version.
    - name: SourceBuildInformation
      value: "{{ SourceBuildInformation }}"
      description: Specify a commit in an AWS CodeCommit Git repository to use as the source code for the application version.
      description: Specify a commit in an AWS CodeCommit Git repository to use as the source code for the application version.
    - name: SourceBundle
      value: "{{ SourceBundle }}"
      description: The Amazon S3 bucket and key that identify the location of the source bundle for this version. The Amazon S3 bucket must be in the same region as the environment. Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with SourceBuildInformation), but not both. If neither SourceBundle nor SourceBuildInformation are provided, Elastic Beanstalk uses a sample application.
      description: The Amazon S3 bucket and key that identify the location of the source bundle for this version. The Amazon S3 bucket must be in the same region as the environment. Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with SourceBuildInformation), but not both. If neither SourceBundle nor SourceBuildInformation are provided, Elastic Beanstalk uses a sample application.
    - name: BuildConfiguration
      value: "{{ BuildConfiguration }}"
      description: Settings for an AWS CodeBuild build.
      description: Settings for an AWS CodeBuild build.
    - name: AutoCreateApplication
      value: {{ AutoCreateApplication }}
      description: Set to true to create an application with the specified name if it doesn't already exist.
      description: Set to true to create an application with the specified name if it doesn't already exist.
    - name: Process
      value: {{ Process }}
      description: Pre-processes and validates the environment manifest (env.yaml) and configuration files (*.config files in the .ebextensions folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment. You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional. The Process option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration.
      description: Pre-processes and validates the environment manifest (env.yaml) and configuration files (*.config files in the .ebextensions folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment. You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional. The Process option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration.
    - name: Tags
      value: "{{ Tags }}"
      description: Specifies the tags applied to the application version. Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags.
      description: Specifies the tags applied to the application version. Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application_version"
    values={[
        { label: 'update_application_version', value: 'update_application_version' }
    ]}
>
<TabItem value="update_application_version">

Updates the specified application version to have the specified properties. If a property (for example, description) is not provided, the value remains unchanged. To clear properties, specify an empty string.

```sql
UPDATE aws.elasticbeanstalk.application_versions
SET 
-- No updatable properties
WHERE 
ApplicationName = '{{ ApplicationName }}' --required
AND VersionLabel = '{{ VersionLabel }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
RETURNING
ApplicationName,
ApplicationVersionArn,
BuildArn,
DateCreated,
DateUpdated,
Description,
SourceBuildInformation,
SourceBundle,
Status,
VersionLabel;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_version"
    values={[
        { label: 'delete_application_version', value: 'delete_application_version' }
    ]}
>
<TabItem value="delete_application_version">

Deletes the specified version from the specified application. You cannot delete an application version that is associated with a running environment.

```sql
DELETE FROM aws.elasticbeanstalk.application_versions
WHERE ApplicationName = '{{ ApplicationName }}' --required
AND VersionLabel = '{{ VersionLabel }}' --required
AND region = '{{ region }}' --required
AND DeleteSourceBundle = '{{ DeleteSourceBundle }}'
;
```
</TabItem>
</Tabs>
