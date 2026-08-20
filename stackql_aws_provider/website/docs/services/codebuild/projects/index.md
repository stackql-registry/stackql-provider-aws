--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_projects"
    values={[
        { label: 'batch_get_projects', value: 'batch_get_projects' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="batch_get_projects">

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
    <td><CopyableCode code="projects" /></td>
    <td><code>array</code></td>
    <td>Information about the requested build projects.</td>
</tr>
<tr>
    <td><CopyableCode code="projects_not_found" /></td>
    <td><code>array</code></td>
    <td>The names of build projects for which information could not be found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_projects">

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
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The list of build project names, with each build project name representing a single build project.</td>
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
    <td><a href="#batch_get_projects"><CopyableCode code="batch_get_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more build projects.</td>
</tr>
<tr>
    <td><a href="#list_projects"><CopyableCode code="list_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of build project names, with each build project name representing a single build project.</td>
</tr>
<tr>
    <td><a href="#create_project"><CopyableCode code="create_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-artifacts"><code>artifacts</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-serviceRole"><code>serviceRole</code></a></td>
    <td></td>
    <td>Creates a build project.</td>
</tr>
<tr>
    <td><a href="#create_webhook"><CopyableCode code="create_webhook" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectName"><code>projectName</code></a></td>
    <td></td>
    <td>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings.</td>
</tr>
<tr>
    <td><a href="#update_project_visibility"><CopyableCode code="update_project_visibility" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectArn"><code>projectArn</code></a>, <a href="#parameter-projectVisibility"><code>projectVisibility</code></a></td>
    <td></td>
    <td>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see Public build projects in the CodeBuild User Guide. The following should be kept in mind when making your projects public: All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public. All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</td>
</tr>
<tr>
    <td><a href="#update_project"><CopyableCode code="update_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Changes the settings of a build project.</td>
</tr>
<tr>
    <td><a href="#update_webhook"><CopyableCode code="update_webhook" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectName"><code>projectName</code></a></td>
    <td></td>
    <td>Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository, rotateSecret is ignored.</td>
</tr>
<tr>
    <td><a href="#delete_project"><CopyableCode code="delete_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a build project. When you delete a project, its builds are not deleted.</td>
</tr>
<tr>
    <td><a href="#delete_webhook"><CopyableCode code="delete_webhook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.</td>
</tr>
<tr>
    <td><a href="#invalidate_project_cache"><CopyableCode code="invalidate_project_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectName"><code>projectName</code></a></td>
    <td></td>
    <td>Resets the cache for a project.</td>
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
    defaultValue="batch_get_projects"
    values={[
        { label: 'batch_get_projects', value: 'batch_get_projects' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="batch_get_projects">

Gets information about one or more build projects.

```sql
SELECT
projects,
projects_not_found
FROM aws.codebuild.projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_projects">

Gets a list of build project names, with each build project name representing a single build project.

```sql
SELECT
project
FROM aws.codebuild.projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_project"
    values={[
        { label: 'create_project', value: 'create_project' },
        { label: 'create_webhook', value: 'create_webhook' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project">

Creates a build project.

```sql
INSERT INTO aws.codebuild.projects (
name,
description,
source,
secondarySources,
sourceVersion,
secondarySourceVersions,
artifacts,
secondaryArtifacts,
cache,
environment,
serviceRole,
timeoutInMinutes,
queuedTimeoutInMinutes,
encryptionKey,
tags,
vpcConfig,
badgeEnabled,
logsConfig,
fileSystemLocations,
buildBatchConfig,
concurrentBuildLimit,
autoRetryLimit,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ source }}' /* required */,
'{{ secondarySources }}',
'{{ sourceVersion }}',
'{{ secondarySourceVersions }}',
'{{ artifacts }}' /* required */,
'{{ secondaryArtifacts }}',
'{{ cache }}',
'{{ environment }}' /* required */,
'{{ serviceRole }}' /* required */,
{{ timeoutInMinutes }},
{{ queuedTimeoutInMinutes }},
'{{ encryptionKey }}',
'{{ tags }}',
'{{ vpcConfig }}',
{{ badgeEnabled }},
'{{ logsConfig }}',
'{{ fileSystemLocations }}',
'{{ buildBatchConfig }}',
{{ concurrentBuildLimit }},
{{ autoRetryLimit }},
'{{ region }}'
RETURNING
project
;
```
</TabItem>
<TabItem value="create_webhook">

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings.

```sql
INSERT INTO aws.codebuild.projects (
projectName,
branchFilter,
filterGroups,
buildType,
manualCreation,
scopeConfiguration,
pullRequestBuildPolicy,
region
)
SELECT 
'{{ projectName }}' /* required */,
'{{ branchFilter }}',
'{{ filterGroups }}',
'{{ buildType }}',
{{ manualCreation }},
'{{ scopeConfiguration }}',
'{{ pullRequestBuildPolicy }}',
'{{ region }}'
RETURNING
webhook
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: projects
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the projects resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the build project.
    - name: description
      value: "{{ description }}"
      description: |
        A description that makes the build project easy to identify.
    - name: source
      description: |
        Information about the build input source code for the build project.
      value:
        type_: "{{ type_ }}"
        location: "{{ location }}"
        gitCloneDepth: {{ gitCloneDepth }}
        gitSubmodulesConfig:
          fetchSubmodules: {{ fetchSubmodules }}
        buildspec: "{{ buildspec }}"
        auth:
          type_: "{{ type_ }}"
          resource: "{{ resource }}"
        reportBuildStatus: {{ reportBuildStatus }}
        buildStatusConfig:
          context: "{{ context }}"
          targetUrl: "{{ targetUrl }}"
        insecureSsl: {{ insecureSsl }}
        sourceIdentifier: "{{ sourceIdentifier }}"
    - name: secondarySources
      description: |
        An array of ProjectSource objects.
      value:
        - type_: "{{ type_ }}"
          location: "{{ location }}"
          gitCloneDepth: {{ gitCloneDepth }}
          gitSubmodulesConfig:
            fetchSubmodules: {{ fetchSubmodules }}
          buildspec: "{{ buildspec }}"
          auth:
            type_: "{{ type_ }}"
            resource: "{{ resource }}"
          reportBuildStatus: {{ reportBuildStatus }}
          buildStatusConfig:
            context: "{{ context }}"
            targetUrl: "{{ targetUrl }}"
          insecureSsl: {{ insecureSsl }}
          sourceIdentifier: "{{ sourceIdentifier }}"
    - name: sourceVersion
      value: "{{ sourceVersion }}"
      description: |
        A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: For CodeCommit: the commit ID, branch, or Git tag to use. For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. For GitLab: the commit ID, branch, or Git tag to use. For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. For Amazon S3: the version ID of the object that represents the build input ZIP file to use. If sourceVersion is specified at the build level, then that version takes precedence over this sourceVersion (at the project level). For more information, see Source Version Sample with CodeBuild in the CodeBuild User Guide.
    - name: secondarySourceVersions
      description: |
        An array of ProjectSourceVersion objects. If secondarySourceVersions is specified at the build level, then they take precedence over these secondarySourceVersions (at the project level).
      value:
        - sourceIdentifier: "{{ sourceIdentifier }}"
          sourceVersion: "{{ sourceVersion }}"
    - name: artifacts
      description: |
        Information about the build output artifacts for the build project.
      value:
        type_: "{{ type_ }}"
        location: "{{ location }}"
        path: "{{ path }}"
        namespaceType: "{{ namespaceType }}"
        name: "{{ name }}"
        packaging: "{{ packaging }}"
        overrideArtifactName: {{ overrideArtifactName }}
        encryptionDisabled: {{ encryptionDisabled }}
        artifactIdentifier: "{{ artifactIdentifier }}"
        bucketOwnerAccess: "{{ bucketOwnerAccess }}"
    - name: secondaryArtifacts
      description: |
        An array of ProjectArtifacts objects.
      value:
        - type_: "{{ type_ }}"
          location: "{{ location }}"
          path: "{{ path }}"
          namespaceType: "{{ namespaceType }}"
          name: "{{ name }}"
          packaging: "{{ packaging }}"
          overrideArtifactName: {{ overrideArtifactName }}
          encryptionDisabled: {{ encryptionDisabled }}
          artifactIdentifier: "{{ artifactIdentifier }}"
          bucketOwnerAccess: "{{ bucketOwnerAccess }}"
    - name: cache
      description: |
        Information about the cache for the build project.
      value:
        type_: "{{ type_ }}"
        location: "{{ location }}"
        modes:
          - "{{ modes }}"
        cacheNamespace: "{{ cacheNamespace }}"
    - name: environment
      description: |
        Information about the build environment of the build project.
      value:
        type_: "{{ type_ }}"
        image: "{{ image }}"
        computeType: "{{ computeType }}"
        computeConfiguration:
          vCpu: {{ vCpu }}
          memory: {{ memory }}
          disk: {{ disk }}
          machineType: "{{ machineType }}"
          instanceType: "{{ instanceType }}"
        fleet:
          fleetArn: "{{ fleetArn }}"
        environmentVariables:
          - name: "{{ name }}"
            value: "{{ value }}"
            type_: "{{ type_ }}"
        privilegedMode: {{ privilegedMode }}
        certificate: "{{ certificate }}"
        registryCredential:
          credential: "{{ credential }}"
          credentialProvider: "{{ credentialProvider }}"
        imagePullCredentialsType: "{{ imagePullCredentialsType }}"
        dockerServer:
          computeType: "{{ computeType }}"
          securityGroupIds:
            - "{{ securityGroupIds }}"
          status:
            status: "{{ status }}"
            message: "{{ message }}"
        hostKernel: "{{ hostKernel }}"
    - name: serviceRole
      value: "{{ serviceRole }}"
      description: |
        The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.
    - name: timeoutInMinutes
      value: {{ timeoutInMinutes }}
      description: |
        How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before it times out any build that has not been marked as completed. The default is 60 minutes.
    - name: queuedTimeoutInMinutes
      value: {{ queuedTimeoutInMinutes }}
      description: |
        The number of minutes a build is allowed to be queued before it times out.
    - name: encryptionKey
      value: "{{ encryptionKey }}"
      description: |
        The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/\`<alias-name>\`).
    - name: tags
      description: |
        A list of tag key and value pairs associated with this build project. These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: vpcConfig
      description: |
        Information about the VPC configuration that CodeBuild accesses.
      value:
        vpcId: "{{ vpcId }}"
        subnets:
          - "{{ subnets }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
    - name: badgeEnabled
      value: {{ badgeEnabled }}
      description: |
        Set this to true to generate a publicly accessible URL for your project's build badge.
    - name: logsConfig
      description: |
        Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
      value:
        cloudWatchLogs:
          status: "{{ status }}"
          groupName: "{{ groupName }}"
          streamName: "{{ streamName }}"
        s3Logs:
          status: "{{ status }}"
          location: "{{ location }}"
          encryptionDisabled: {{ encryptionDisabled }}
          bucketOwnerAccess: "{{ bucketOwnerAccess }}"
    - name: fileSystemLocations
      description: |
        An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic File System.
      value:
        - type_: "{{ type_ }}"
          location: "{{ location }}"
          mountPoint: "{{ mountPoint }}"
          identifier: "{{ identifier }}"
          mountOptions: "{{ mountOptions }}"
    - name: buildBatchConfig
      description: |
        Contains configuration information about a batch build project.
      value:
        serviceRole: "{{ serviceRole }}"
        combineArtifacts: {{ combineArtifacts }}
        restrictions:
          maximumBuildsAllowed: {{ maximumBuildsAllowed }}
          computeTypesAllowed:
            - "{{ computeTypesAllowed }}"
          fleetsAllowed:
            - "{{ fleetsAllowed }}"
        timeoutInMins: {{ timeoutInMins }}
        batchReportMode: "{{ batchReportMode }}"
    - name: concurrentBuildLimit
      value: {{ concurrentBuildLimit }}
      description: |
        The maximum number of concurrent builds that are allowed for this project. New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.
    - name: autoRetryLimit
      value: {{ autoRetryLimit }}
      description: |
        The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times.
    - name: projectName
      value: "{{ projectName }}"
      description: |
        The name of the CodeBuild project.
    - name: branchFilter
      value: "{{ branchFilter }}"
      description: |
        A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are built. It is recommended that you use filterGroups instead of branchFilter.
    - name: filterGroups
      value:
        - "{{ filterGroups }}"
      description: |
        An array of arrays of WebhookFilter objects used to determine which webhooks are triggered. At least one WebhookFilter in the array must specify EVENT as its type. For a build to be triggered, at least one filter group in the filterGroups array must pass. For a filter group to pass, each of its filters must pass.
    - name: buildType
      value: "{{ buildType }}"
      description: |
        Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available for NO_SOURCE source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see Tutorial: Configure a CodeBuild-hosted Buildkite runner in the CodeBuild user guide.
      valid_values: ['BUILD', 'BUILD_BATCH', 'RUNNER_BUILDKITE_BUILD']
    - name: manualCreation
      value: {{ manualCreation }}
      description: |
        If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns payloadUrl and secret values for the webhook. The payloadUrl and secret values in the output can be used to manually create a webhook within GitHub. manualCreation is only available for GitHub webhooks.
    - name: scopeConfiguration
      description: |
        The scope configuration for global or organization webhooks. Global or organization webhooks are only available for GitHub and Github Enterprise webhooks.
      value:
        name: "{{ name }}"
        domain: "{{ domain }}"
        scope: "{{ scope }}"
    - name: pullRequestBuildPolicy
      description: |
        A PullRequestBuildPolicy object that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.
      value:
        requiresCommentApproval: "{{ requiresCommentApproval }}"
        approverRoles:
          - "{{ approverRoles }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_project_visibility"
    values={[
        { label: 'update_project_visibility', value: 'update_project_visibility' },
        { label: 'update_project', value: 'update_project' },
        { label: 'update_webhook', value: 'update_webhook' }
    ]}
>
<TabItem value="update_project_visibility">

Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see Public build projects in the CodeBuild User Guide. The following should be kept in mind when making your projects public: All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public. All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.

```sql
UPDATE aws.codebuild.projects
SET 
projectArn = '{{ projectArn }}',
projectVisibility = '{{ projectVisibility }}',
resourceAccessRole = '{{ resourceAccessRole }}'
WHERE 
region = '{{ region }}' --required
AND projectArn = '{{ projectArn }}' --required
AND projectVisibility = '{{ projectVisibility }}' --required
RETURNING
project_arn,
project_visibility,
public_project_alias;
```
</TabItem>
<TabItem value="update_project">

Changes the settings of a build project.

```sql
UPDATE aws.codebuild.projects
SET 
name = '{{ name }}',
description = '{{ description }}',
source = '{{ source }}',
secondarySources = '{{ secondarySources }}',
sourceVersion = '{{ sourceVersion }}',
secondarySourceVersions = '{{ secondarySourceVersions }}',
artifacts = '{{ artifacts }}',
secondaryArtifacts = '{{ secondaryArtifacts }}',
cache = '{{ cache }}',
environment = '{{ environment }}',
serviceRole = '{{ serviceRole }}',
timeoutInMinutes = {{ timeoutInMinutes }},
queuedTimeoutInMinutes = {{ queuedTimeoutInMinutes }},
encryptionKey = '{{ encryptionKey }}',
tags = '{{ tags }}',
vpcConfig = '{{ vpcConfig }}',
badgeEnabled = {{ badgeEnabled }},
logsConfig = '{{ logsConfig }}',
fileSystemLocations = '{{ fileSystemLocations }}',
buildBatchConfig = '{{ buildBatchConfig }}',
concurrentBuildLimit = {{ concurrentBuildLimit }},
autoRetryLimit = {{ autoRetryLimit }}
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
project;
```
</TabItem>
<TabItem value="update_webhook">

Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository, rotateSecret is ignored.

```sql
UPDATE aws.codebuild.projects
SET 
projectName = '{{ projectName }}',
branchFilter = '{{ branchFilter }}',
rotateSecret = {{ rotateSecret }},
filterGroups = '{{ filterGroups }}',
buildType = '{{ buildType }}',
pullRequestBuildPolicy = '{{ pullRequestBuildPolicy }}'
WHERE 
region = '{{ region }}' --required
AND projectName = '{{ projectName }}' --required
RETURNING
webhook;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project"
    values={[
        { label: 'delete_project', value: 'delete_project' },
        { label: 'delete_webhook', value: 'delete_webhook' }
    ]}
>
<TabItem value="delete_project">

Deletes a build project. When you delete a project, its builds are not deleted.

```sql
DELETE FROM aws.codebuild.projects
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_webhook">

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

```sql
DELETE FROM aws.codebuild.projects
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invalidate_project_cache"
    values={[
        { label: 'invalidate_project_cache', value: 'invalidate_project_cache' }
    ]}
>
<TabItem value="invalidate_project_cache">

Resets the cache for a project.

```sql
EXEC aws.codebuild.projects.invalidate_project_cache 
@region='{{ region }}' --required 
@@json=
'{
"projectName": "{{ projectName }}"
}'
;
```
</TabItem>
</Tabs>
